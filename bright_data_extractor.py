#!/usr/bin/env python3
"""
New Era Furniture Product Extractor using Bright Data API
Systematic extraction of all furniture products with complete specifications
"""

import requests
import json
import time
import re
from typing import Dict, List, Optional
from dataclasses import dataclass
from urllib.parse import urljoin, urlparse
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@dataclass
class Product:
    name: str
    sku: str
    price: float
    original_price: Optional[float]
    category: str
    subcategory: str
    dimensions: Dict[str, float]
    weight: Optional[float]
    materials: List[str]
    colors: List[str]
    features: List[str]
    description: str
    images: List[str]
    url: str
    stock_status: str
    specifications: Dict[str, str]

class NewEraFurnitureExtractor:
    def __init__(self, base_url="https://newerafurniture.us"):
        self.base_url = base_url
        self.session = requests.Session()
        self.products = []
        
        # Category navigation paths
        self.categories = {
            'sofas': '/sofas',
            'sectionals': '/sectionals',
            'bedroom': '/bedroom',
            'dining': '/dining-room',
            'chairs': '/chairs'
        }
        
        # Headers to mimic browser
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        })

    def extract_products_from_category(self, category_path: str, category_name: str) -> List[Product]:
        """Extract all products from a specific category page"""
        logger.info(f"Extracting products from {category_name} category")
        
        products = []
        page = 1
        
        while True:
            url = f"{self.base_url}{category_path}"
            if page > 1:
                url += f"?page={page}"
            
            try:
                response = self.session.get(url, timeout=30)
                response.raise_for_status()
                
                # Extract product URLs from category page
                product_urls = self._extract_product_urls(response.text, category_name)
                
                if not product_urls:
                    logger.info(f"No more products found on page {page} for {category_name}")
                    break
                
                logger.info(f"Found {len(product_urls)} product URLs on page {page}")
                
                # Extract detailed info for each product
                for product_url in product_urls:
                    try:
                        product = self._extract_product_details(product_url, category_name)
                        if product:
                            products.append(product)
                            logger.info(f"Extracted: {product.name}")
                            time.sleep(1)  # Rate limiting
                    except Exception as e:
                        logger.error(f"Error extracting product from {product_url}: {e}")
                        continue
                
                page += 1
                
                # Check if there's a next page
                if not self._has_next_page(response.text):
                    break
                    
            except requests.RequestException as e:
                logger.error(f"Error accessing category page {url}: {e}")
                break
        
        return products

    def _extract_product_urls(self, html_content: str, category: str) -> List[str]:
        """Extract product detail page URLs from category HTML"""
        # Common patterns for product links
        patterns = [
            r'<a[^>]+href=["\']([^"\']*product[^"\']*)["\'][^>]*>',
            r'<a[^>]+href=["\']([^"\']*item[^"\']*)["\'][^>]*>',
            r'<div[^>]*class=["\'][^"\']*product[^"\']*["\'][^>]*>.*?<a[^>]+href=["\']([^"\']*)["\']',
        ]
        
        urls = []
        for pattern in patterns:
            matches = re.findall(pattern, html_content, re.IGNORECASE | re.DOTALL)
            for match in matches:
                if match and not match.startswith('#'):
                    full_url = urljoin(self.base_url, match)
                    urls.append(full_url)
        
        # Remove duplicates while preserving order
        seen = set()
        unique_urls = []
        for url in urls:
            if url not in seen:
                seen.add(url)
                unique_urls.append(url)
        
        return unique_urls

    def _has_next_page(self, html_content: str) -> bool:
        """Check if there's a next page link"""
        next_page_patterns = [
            r'<a[^>]+rel=["\']next["\']',
            r'<a[^>]+class=["\'][^"\']*next[^"\']*["\']',
            r'<li[^>]*>.*?<a[^>]+aria-label=["\']Next["\']',
        ]
        
        for pattern in next_page_patterns:
            if re.search(pattern, html_content, re.IGNORECASE):
                return True
        
        return False

    def _extract_product_details(self, product_url: str, category: str) -> Optional[Product]:
        """Extract detailed product information from product page"""
        try:
            response = self.session.get(product_url, timeout=30)
            response.raise_for_status()
            html_content = response.text
            
            # Extract basic product info
            name = self._extract_product_name(html_content)
            sku = self._extract_sku(html_content)
            price_info = self._extract_price_info(html_content)
            dimensions = self._extract_dimensions(html_content)
            weight = self._extract_weight(html_content)
            materials = self._extract_materials(html_content)
            colors = self._extract_colors(html_content)
            features = self._extract_features(html_content)
            description = self._extract_description(html_content)
            images = self._extract_images(html_content, product_url)
            stock_status = self._extract_stock_status(html_content)
            specifications = self._extract_specifications(html_content)
            
            if not name or not sku:
                logger.warning(f"Could not extract essential info from {product_url}")
                return None
            
            return Product(
                name=name,
                sku=sku,
                price=price_info.get('current_price', 0.0),
                original_price=price_info.get('original_price'),
                category=category,
                subcategory=self._determine_subcategory(html_content, category),
                dimensions=dimensions,
                weight=weight,
                materials=materials,
                colors=colors,
                features=features,
                description=description,
                images=images,
                url=product_url,
                stock_status=stock_status,
                specifications=specifications
            )
            
        except requests.RequestException as e:
            logger.error(f"Error accessing product page {product_url}: {e}")
            return None

    def _extract_product_name(self, html_content: str) -> Optional[str]:
        """Extract product name from HTML"""
        name_patterns = [
            r'<h1[^>]*>([^<]+)</h1>',
            r'<h2[^>]*class=["\'][^"\']*product[^"\']*name[^"\']*["\'][^>]*>([^<]+)</h2>',
            r'<div[^>]*class=["\'][^"\']*product[^"\']*title[^"\']*["\'][^>]*>([^<]+)</div>',
            r'<meta[^>]+property=["\']og:title["\'][^>]+content=["\']([^"\']*)["\']',
        ]
        
        for pattern in name_patterns:
            match = re.search(pattern, html_content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return None

    def _extract_sku(self, html_content: str) -> Optional[str]:
        """Extract SKU/model number"""
        sku_patterns = [
            r'SKU[^<]*[:#][^<]*([A-Z0-9\-]+)',
            r'Model[^<]*[:#][^<]*([A-Z0-9\-]+)',
            r'<span[^>]*>[^<]*([A-Z0-9\-]{4,})[^<]*</span>',
            r'item[^<]*[:#][^<]*([A-Z0-9\-]+)',
        ]
        
        for pattern in sku_patterns:
            match = re.search(pattern, html_content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        # Generate SKU from URL if not found
        return None

    def _extract_price_info(self, html_content: str) -> Dict:
        """Extract price information"""
        price_patterns = [
            r'\$([0-9,]+\.?[0-9]*)',
            r'price[^<]*[:\$][^<]*([0-9,]+\.?[0-9]*)',
            r'<span[^>]*>[^<]*\$([0-9,]+\.?[0-9]*)[^<]*</span>',
        ]
        
        prices = []
        for pattern in price_patterns:
            matches = re.findall(pattern, html_content, re.IGNORECASE)
            prices.extend([float(p.replace(',', '')) for p in matches if p])
        
        if not prices:
            return {'current_price': 0.0}
        
        prices = sorted(prices)
        if len(prices) > 1:
            return {
                'current_price': prices[0],
                'original_price': prices[-1]
            }
        else:
            return {'current_price': prices[0]}

    def _extract_dimensions(self, html_content: str) -> Dict[str, float]:
        """Extract product dimensions"""
        dimension_patterns = [
            r'(\d+(?:\.\d+)?)["\']?\s*[x×X]\s*(\d+(?:\.\d+)?)["\']?\s*[x×X]\s*(\d+(?:\.\d+)?)',
            r'Dimensions[^<]*[:#][^<]*(\d+(?:\.\d+)?)[^<]*(\d+(?:\.\d+)?)[^<]*(\d+(?:\.\d+)?)',
            r'(\d+(?:\.\d+)?)\s*(?:inches?|in|\")[^<]*\s*(\d+(?:\.\d+)?)[^<]*\s*(\d+(?:\.\d+)?)',
        ]
        
        for pattern in dimension_patterns:
            match = re.search(pattern, html_content, re.IGNORECASE | re.DOTALL)
            if match:
                groups = match.groups()
                if len(groups) >= 3:
                    return {
                        'length': float(groups[0]),
                        'width': float(groups[1]),
                        'height': float(groups[2])
                    }
        
        return {}

    def _extract_weight(self, html_content: str) -> Optional[float]:
        """Extract product weight"""
        weight_patterns = [
            r'(\d+(?:\.\d+)?)\s*(?:lbs?|pounds?)',
            r'Weight[^<]*[:#][^<]*(\d+(?:\.\d+)?)',
        ]
        
        for pattern in weight_patterns:
            match = re.search(pattern, html_content, re.IGNORECASE)
            if match:
                return float(match.group(1))
        
        return None

    def _extract_materials(self, html_content: str) -> List[str]:
        """Extract product materials"""
        materials_keywords = [
            'leather', 'fabric', 'wood', 'metal', 'steel', 'aluminum',
            'microfiber', 'velvet', 'linen', 'cotton', 'polyester',
            'oak', 'walnut', 'pine', 'mahogany', 'cherry'
        ]
        
        found_materials = []
        content_lower = html_content.lower()
        
        for material in materials_keywords:
            if material.lower() in content_lower:
                found_materials.append(material)
        
        return found_materials

    def _extract_colors(self, html_content: str) -> List[str]:
        """Extract available colors"""
        color_keywords = [
            'black', 'white', 'gray', 'grey', 'brown', 'beige',
            'blue', 'red', 'green', 'yellow', 'purple', 'orange',
            'cream', 'tan', 'navy', 'burgundy', 'teal'
        ]
        
        found_colors = []
        content_lower = html_content.lower()
        
        for color in color_keywords:
            pattern = rf'\b{color}\b'
            if re.search(pattern, content_lower, re.IGNORECASE):
                found_colors.append(color)
        
        return found_colors

    def _extract_features(self, html_content: str) -> List[str]:
        """Extract product features"""
        feature_keywords = [
            'reclining', 'adjustable', 'convertible', 'storage',
            'removable', 'washable', 'stain resistant', 'waterproof',
            'ergonomic', 'swivel', 'rocking', 'folding', 'extendable'
        ]
        
        found_features = []
        content_lower = html_content.lower()
        
        for feature in feature_keywords:
            if feature.lower() in content_lower:
                found_features.append(feature)
        
        return found_features

    def _extract_description(self, html_content: str) -> str:
        """Extract product description"""
        description_patterns = [
            r'<div[^>]*class=["\'][^"\']*description[^"\']*["\'][^>]*>([^<]+)</div>',
            r'<p[^>]*class=["\'][^"\']*description[^"\']*["\'][^>]*>([^<]+)</p>',
            r'<meta[^>]+property=["\']og:description["\'][^>]+content=["\']([^"\']*)["\']',
        ]
        
        for pattern in description_patterns:
            match = re.search(pattern, html_content, re.IGNORECASE | re.DOTALL)
            if match:
                description = match.group(1).strip()
                if len(description) > 20:  # Minimum meaningful description length
                    return description
        
        return "Description not available"

    def _extract_images(self, html_content: str, product_url: str) -> List[str]:
        """Extract product images"""
        image_patterns = [
            r'<img[^>]+src=["\']([^"\']*product[^"\']*\.(?:jpg|jpeg|png|webp))["\']',
            r'<img[^>]+data-src=["\']([^"\']*\.(?:jpg|jpeg|png|webp))["\']',
            r'<a[^>]+href=["\']([^"\']*\.(?:jpg|jpeg|png|webp))["\'][^>]*class=["\'][^"\']*gallery',
        ]
        
        images = []
        for pattern in image_patterns:
            matches = re.findall(pattern, html_content, re.IGNORECASE)
            for match in matches:
                if match and not match.startswith('data:'):
                    full_url = urljoin(product_url, match)
                    images.append(full_url)
        
        # Remove duplicates
        return list(set(images))

    def _extract_stock_status(self, html_content: str) -> str:
        """Extract stock status"""
        if re.search(r'in stock|available|ready to ship', html_content, re.IGNORECASE):
            return 'In Stock'
        elif re.search(r'out of stock|unavailable|sold out', html_content, re.IGNORECASE):
            return 'Out of Stock'
        else:
            return 'Stock Status Unknown'

    def _extract_specifications(self, html_content: str) -> Dict[str, str]:
        """Extract detailed specifications"""
        spec_patterns = [
            r'<tr[^>]*>\s*<td[^>]*>([^<]+)</td>\s*<td[^>]*>([^<]+)</td>\s*</tr>',
            r'<dt[^>]*>([^<]+)</dt>\s*<dd[^>]*>([^<]+)</dd>',
        ]
        
        specifications = {}
        for pattern in spec_patterns:
            matches = re.findall(pattern, html_content, re.IGNORECASE | re.DOTALL)
            for key, value in matches:
                key_clean = key.strip().lower().replace(' ', '_')
                specifications[key_clean] = value.strip()
        
        return specifications

    def _determine_subcategory(self, html_content: str, main_category: str) -> str:
        """Determine subcategory based on content analysis"""
        content_lower = html_content.lower()
        
        if main_category == 'sofas':
            if 'sectional' in content_lower:
                return 'sectional_sofas'
            elif 'reclining' in content_lower:
                return 'reclining_sofas'
            elif 'sleeper' in content_lower or 'sofa bed' in content_lower:
                return 'sleeper_sofas'
            else:
                return 'standard_sofas'
        
        elif main_category == 'chairs':
            if 'accent' in content_lower:
                return 'accent_chairs'
            elif 'reclining' in content_lower or 'recliner' in content_lower:
                return 'recliners'
            elif 'office' in content_lower or 'desk' in content_lower:
                return 'office_chairs'
            else:
                return 'dining_chairs'
        
        return main_category

    def extract_all_products(self) -> List[Product]:
        """Extract products from all categories"""
        all_products = []
        
        for category_name, category_path in self.categories.items():
            logger.info(f"Processing {category_name} category...")
            category_products = self.extract_products_from_category(category_path, category_name)
            all_products.extend(category_products)
            logger.info(f"Extracted {len(category_products)} products from {category_name}")
            
            # Rate limiting between categories
            time.sleep(2)
        
        return all_products

    def save_to_json(self, products: List[Product], filename: str):
        """Save products to JSON file"""
        products_dict = []
        for product in products:
            product_dict = {
                'name': product.name,
                'sku': product.sku,
                'price': product.price,
                'original_price': product.original_price,
                'category': product.category,
                'subcategory': product.subcategory,
                'dimensions': product.dimensions,
                'weight': product.weight,
                'materials': product.materials,
                'colors': product.colors,
                'features': product.features,
                'description': product.description,
                'images': product.images,
                'url': product.url,
                'stock_status': product.stock_status,
                'specifications': product.specifications
            }
            products_dict.append(product_dict)
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(products_dict, f, indent=2, ensure_ascii=False)
        
        logger.info(f"Saved {len(products)} products to {filename}")

    def create_paginated_output(self, products: List[Product], products_per_page: int = 20):
        """Create paginated JSON files for web deployment"""
        total_products = len(products)
        total_pages = (total_products + products_per_page - 1) // products_per_page
        
        logger.info(f"Creating {total_pages} pages with {products_per_page} products each")
        
        for page_num in range(1, total_pages + 1):
            start_idx = (page_num - 1) * products_per_page
            end_idx = min(start_idx + products_per_page, total_products)
            
            page_products = products[start_idx:end_idx]
            
            page_data = {
                'page': page_num,
                'total_pages': total_pages,
                'products_per_page': products_per_page,
                'total_products': total_products,
                'products': []
            }
            
            for product in page_products:
                product_dict = {
                    'name': product.name,
                    'sku': product.sku,
                    'price': product.price,
                    'original_price': product.original_price,
                    'category': product.category,
                    'subcategory': product.subcategory,
                    'dimensions': product.dimensions,
                    'weight': product.weight,
                    'materials': product.materials,
                    'colors': product.colors,
                    'features': product.features,
                    'description': product.description[:200] + '...' if len(product.description) > 200 else product.description,
                    'thumbnail_image': product.images[0] if product.images else None,
                    'all_images': product.images,
                    'url': product.url,
                    'stock_status': product.stock_status
                }
                page_data['products'].append(product_dict)
            
            filename = f'products_page_{page_num}.json'
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(page_data, f, indent=2, ensure_ascii=False)
            
            logger.info(f"Created {filename} with {len(page_products)} products")

if __name__ == "__main__":
    logger.info("Starting New Era Furniture product extraction...")
    
    extractor = NewEraFurnitureExtractor()
    
    # Extract all products
    products = extractor.extract_all_products()
    
    logger.info(f"Total products extracted: {len(products)}")
    
    if products:
        # Save complete data
        extractor.save_to_json(products, 'new_era_furniture_complete.json')
        
        # Create paginated output
        extractor.create_paginated_output(products)
        
        # Create category summary
        category_counts = {}
        for product in products:
            category = product.category
            if category not in category_counts:
                category_counts[category] = 0
            category_counts[category] += 1
        
        logger.info("Category summary:")
        for category, count in category_counts.items():
            logger.info(f"  {category}: {count} products")
    else:
        logger.warning("No products were extracted!")
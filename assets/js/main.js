/**
 * StoryVerse Hub - Main JavaScript
 * Interactive features for sales funnel
 */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
    
    lastScroll = currentScroll;
});

// Form validation and submission
document.getElementById('bookCreationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.childName || !data.childAge) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show success message
    alert('Thank you! Your book is being created. You\'ll receive a preview shortly.');
    
    // In production, this would send data to server
    console.log('Book creation data:', data);
});

// Theme card selection
document.querySelectorAll('.theme-card input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove selected class from all cards
        document.querySelectorAll('.theme-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Add selected class to parent card
        this.closest('.theme-card').classList.add('selected');
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .testimonial-card, .step-content').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '☰';
mobileMenuToggle.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

// Add mobile menu toggle to navbar
const navbarContainer = document.querySelector('.navbar .container');
if (navbarContainer) {
    navbarContainer.appendChild(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('mobile-open');
    });
}

// Add CSS for mobile menu
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block !important;
        }
        
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .theme-card.selected {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }
`;

document.head.appendChild(mobileStyles);

console.log('StoryVerse Hub JS loaded successfully');
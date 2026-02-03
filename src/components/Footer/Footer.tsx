export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">New Era Furniture</h2>
            <div className="flex gap-4 text-sm">
              <span>📞 (713) 808-9064</span>
              <span>📧 sales@newerafurniture.us</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              © 2024 New Era Furniture - Complete Product Catalog with WhatsApp Integration
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Business Hours: Mon-Fri 8am-5pm, Sat 9am-2pm, Sun Closed
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
import { Send, Phone, Instagram, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-strawberry to-orange-custom text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Send className="w-5 h-5" />
            <a
              href="https://t.me/cocoberry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @cocoberry
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Clock className="w-5 h-5" />
            <span>Mon–Sun: 9:00 – 22:00</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Phone className="w-5 h-5" />
            <a href="tel:+1234567890" className="hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Instagram className="w-5 h-5" />
            <a
              href="https://instagram.com/cocoberry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @cocoberry
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm opacity-90">
          <p>© 2024 Cocoberry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

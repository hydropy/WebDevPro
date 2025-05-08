const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-bold font-heading">
                WebDev<span className="text-secondary">Pro</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional web development with ultra-fast delivery. Get your website today, not next week.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-bold text-lg mb-4 font-heading">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 font-heading">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <i className="fab fa-whatsapp mr-2"></i>
                  <a href="https://wa.me/919347455431" className="hover:text-white transition-colors">
                    +91 9347455431
                  </a>
                </li>
                <li className="text-gray-400">
                  <span>Payment Options:</span>
                  <div className="flex space-x-2 mt-2">
                    <i className="fas fa-credit-card text-[#4A69BD]"></i>
                    <i className="fab fa-paypal text-[#003087]"></i>
                    <i className="fab fa-bitcoin text-[#F7931A]"></i>
                    <i className="fas fa-university text-[#20BF6B]"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} WebDevPro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import { Link } from 'wouter';
import useHeaderScroll from '@/hooks/useHeaderScroll';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useHeaderScroll();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-blur bg-white/80 border-b border-gray-200",
      scrolled ? "py-3 shadow-md" : "py-4"
    )}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary font-heading">
              WebDev<span className="text-secondary">Pro</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-secondary transition-colors font-medium">
              How It Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-secondary transition-colors font-medium">
              Features
            </a>
            <a href="#contact" className="bg-secondary hover:bg-secondary/90 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              Get Started
            </a>
          </nav>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile navigation menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-40 mt-4 py-2" : "max-h-0"
        )}>
          <div className="space-y-2">
            <a 
              href="#how-it-works" 
              className="block py-2 text-gray-700 hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="block py-2 text-gray-700 hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-secondary font-medium hover:text-secondary/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

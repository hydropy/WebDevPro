import { useState } from 'react';
import { Link } from 'wouter';
import useHeaderScroll from '@/hooks/useHeaderScroll';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useHeaderScroll();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut", 
        delay: 0.1 + (i * 0.1) 
      }
    })
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut", 
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(9, 132, 227, 0.3), 0 4px 6px -4px rgba(9, 132, 227, 0.3)",
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-blur backdrop-blur-lg bg-white/70 border-b border-white/20",
      scrolled ? "py-3 shadow-glow" : "py-4"
    )}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={logoVariants}
          >
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold font-heading relative">
                <span className="premium-gradient-text">WebDev<span className="text-secondary">Pro</span></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#how-it-works", label: "How It Works" },
              { href: "#features", label: "Features" },
              { href: "#testimonials", label: "Testimonials" }
            ].map((item, index) => (
              <motion.a 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-secondary transition-colors font-medium relative group"
                custom={index}
                initial="initial"
                animate="animate"
                variants={navItemVariants}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            
            <motion.a 
              href="#contact" 
              className="relative bg-secondary text-white font-medium py-2.5 px-7 rounded-lg transition-all duration-300 overflow-hidden group"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={buttonVariants}
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 premium-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </nav>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile navigation menu */}
        <motion.div 
          className={cn(
            "md:hidden transition-all duration-500 overflow-hidden",
            mobileMenuOpen ? "max-h-96 mt-4 py-4 glass-card rounded-xl" : "max-h-0"
          )}
          initial={false}
          animate={{ 
            maxHeight: mobileMenuOpen ? 200 : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="space-y-3 px-4">
            {[
              { href: "#how-it-works", label: "How It Works" },
              { href: "#features", label: "Features" },
              { href: "#testimonials", label: "Testimonials" },
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block py-2 px-3 text-gray-700 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block py-2 px-3 mt-2 bg-secondary text-white rounded-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

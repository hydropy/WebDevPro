import { useEffect, useState } from 'react';

export const useHeaderScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', checkScroll);
    
    // Initial check
    checkScroll();
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  
  return scrolled;
};

export default useHeaderScroll;

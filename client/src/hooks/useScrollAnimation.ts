import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const appearElements = document.querySelectorAll('.appear');
    
    const checkAppear = () => {
      const triggerBottom = window.innerHeight * 0.8;
      
      appearElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          const delay = element.getAttribute('data-delay') || '0';
          setTimeout(() => {
            element.classList.add('active');
          }, parseInt(delay));
        }
      });
    };
    
    window.addEventListener('scroll', checkAppear);
    window.addEventListener('resize', checkAppear);
    
    // Initial check
    setTimeout(checkAppear, 100);
    
    return () => {
      window.removeEventListener('scroll', checkAppear);
      window.removeEventListener('resize', checkAppear);
    };
  }, []);
};

export default useScrollAnimation;

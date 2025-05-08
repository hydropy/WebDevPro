import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesBanner from '@/components/FeaturesBanner';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import CtaSection from '@/components/CtaSection';
import CryptoPayment from '@/components/CryptoPayment';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Testimonials from '@/components/Testimonials';
import ProcessSection from '@/components/ProcessSection';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Home = () => {
  // Initialize scroll animation
  useScrollAnimation();
  
  // Set up smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href') as string;
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesBanner />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CryptoPayment />
        <ProcessSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;

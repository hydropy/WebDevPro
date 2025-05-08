import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Founder",
    company: "TechStart",
    content: "WebDevPro delivered our landing page in just 3 hours. The quality was exceptional, and the conversion rate increased by 40% immediately. Their rapid turnaround saved us weeks of development time.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "GrowthLabs",
    content: "I needed a website for our product launch within 24 hours. WebDevPro not only delivered on time but exceeded our expectations with a stunning, responsive design that our customers love.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Cryptoverse",
    content: "As a crypto business, finding developers who understand our needs was challenging. WebDevPro built our site in a single day, with seamless crypto payment integration and a professional look.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const rotateTestimonials = () => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };
    
    timeoutRef.current = setTimeout(rotateTestimonials, 6000);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);
  
  // Click handler for testimonial navigation
  const handleDotClick = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Businesses Worldwide
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See what our clients say about our rapid website delivery service.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-10 text-8xl text-gray-200 font-serif">❝</div>
          <div className="absolute -bottom-20 -right-10 text-8xl text-gray-200 font-serif">❞</div>
          
          {/* Testimonial cards */}
          <div className="relative h-[360px] md:h-[280px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute bg-white rounded-2xl shadow-xl p-8 w-full transition-all",
                  "border border-gray-100"
                )}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.8,
                  zIndex: index === activeIndex ? 2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-secondary/20 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="italic text-gray-700 mb-4 text-lg">"{testimonial.content}"</p>
                    <div className="mt-4">
                      <h4 className="font-bold text-primary">{testimonial.name}</h4>
                      <p className="text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-secondary" : "bg-gray-300 hover:bg-secondary/50"
                )}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
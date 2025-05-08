import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const AnimatedCard = ({ className, children, delay = 0 }: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Calculate the rotation based on mouse position
  const calculateRotation = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const cardRect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    // Calculate rotation angle based on mouse position relative to the card center
    const rotateY = -(e.clientX - cardCenterX) / 20;
    const rotateX = (e.clientY - cardCenterY) / 20;
    
    // Update mouse position for the highlighting effect
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    setMousePosition({ x, y });
    
    return { rotateX, rotateY };
  };
  
  // Reset highlight effect when the component unmounts
  useEffect(() => {
    return () => {
      setIsHovered(false);
    };
  }, []);
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative bg-white rounded-xl p-8 shadow-md transition-all duration-300 overflow-hidden",
        "border border-gray-100 backdrop-blur-sm",
        isHovered && "shadow-xl border-gray-200",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        if (isHovered) {
          const rotation = calculateRotation(e);
          if (rotation && cardRef.current) {
            cardRef.current.style.transform = `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`;
          }
        }
      }}
    >
      {/* Highlight effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-70 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(9, 132, 227, 0.2) 0%, rgba(255, 255, 255, 0) 70%)`,
          }}
        />
      )}
      
      {/* Card border glow effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl border border-secondary/20 pointer-events-none" />
      )}
      
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
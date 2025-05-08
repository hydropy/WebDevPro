import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
        delay: 0.3
      }
    }
  };

  const statsData = [
    { icon: "fas fa-bolt", label: "3-hour express delivery", color: "accent" },
    { icon: "fas fa-calendar-check", label: "Same-day standard delivery", color: "secondary" },
    { icon: "fas fa-coins", label: "Secure crypto payments", color: "accent" },
    { icon: "fas fa-check-circle", label: "100% satisfaction guarantee", color: "secondary" },
  ];

  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white -z-10"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div>
            <motion.div
              className="flex flex-col max-w-xl"
              variants={containerVariants}
            >
              <motion.span 
                className="text-secondary font-semibold mb-2 flex items-center"
                variants={itemVariants}
              >
                <span className="w-6 h-1 bg-secondary rounded-full mr-2"></span>
                ULTRA-FAST WEB DEVELOPMENT
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 bg-clip-text"
                variants={itemVariants}
              >
                Get Your Website <span className="text-secondary">Today</span>, Not Next Week
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-lg"
                variants={itemVariants}
              >
                Same-day or 3-hour website delivery with premium design. Professional, responsive, and ready for your business to shine online.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-10"
                variants={itemVariants}
              >
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white group relative overflow-hidden"
                  asChild
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    <span className="relative z-10">Start Your Project</span>
                    <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 hover:border-secondary text-gray-700 hover:text-secondary transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/919347455431" className="flex items-center justify-center gap-2">
                    <i className="fab fa-whatsapp text-lg"></i>
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={itemVariants}
              >
                {statsData.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className={`w-10 h-10 rounded-full bg-${stat.color}/10 flex items-center justify-center text-${stat.color}`}>
                      <i className={stat.icon}></i>
                    </div>
                    <span className="text-gray-800 font-medium">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            variants={imageVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white border-opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Professional web development workspace" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Floating features callouts */}
              <motion.div 
                className="absolute top-5 -left-12 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-64"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Clean Code</h4>
                  <p className="text-sm text-gray-600">Modern, maintainable code</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-5 -right-12 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-64"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Fully Responsive</h4>
                  <p className="text-sm text-gray-600">Perfect on all devices</p>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-secondary opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-accent opacity-20"></div>
            </div>
            
            {/* Decorative dots pattern */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 opacity-20">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

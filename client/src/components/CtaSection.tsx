import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-secondary to-accent blur-sm opacity-50"></div>
          
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-12 md:p-16 flex items-center">
                <div>
                  <motion.div 
                    className="inline-block mb-3 bg-white/10 px-4 py-1 rounded-full"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2"></div>
                      <span className="text-white/90 text-sm font-medium">LAUNCH YOUR WEBSITE TODAY</span>
                    </div>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Ready for a website that impresses your customers?
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-300 mb-8 text-lg max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Get your professional website in as little as 3 hours. Start now and go live today with our premium design and ultra-fast delivery.
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Button 
                      className="bg-accent hover:bg-accent/90 text-white group relative overflow-hidden" 
                      size="lg"
                      asChild
                    >
                      <a href="#contact" className="flex items-center gap-2">
                        <span className="relative z-10">Start Your Project</span>
                        <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                        <span className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white/20 text-white hover:bg-white/10" 
                      size="lg"
                      asChild
                    >
                      <a href="https://wa.me/919347455431" className="flex items-center gap-2">
                        <i className="fab fa-whatsapp"></i>
                        <span>Chat on WhatsApp</span>
                      </a>
                    </Button>
                  </motion.div>
                  
                  {/* Stats */}
                  <motion.div 
                    className="mt-10 flex flex-wrap gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {[
                      { value: "3h", label: "Fast turnaround" },
                      { value: "100%", label: "Satisfaction rate" },
                      { value: "24/7", label: "Support" }
                    ].map((stat, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        <span className="text-sm text-gray-400">{stat.label}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              <div className="md:col-span-2 hidden md:block relative">
                <motion.img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Premium website design" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Tech stack elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"></div>
                  
                  <div className="relative z-10 grid grid-cols-3 gap-6 p-8">
                    {[
                      { icon: "fab fa-react", label: "React", color: "text-blue-400" },
                      { icon: "fab fa-node-js", label: "Node.js", color: "text-green-400" },
                      { icon: "fab fa-js", label: "JavaScript", color: "text-yellow-400" },
                      { icon: "fab fa-html5", label: "HTML5", color: "text-orange-400" },
                      { icon: "fab fa-css3-alt", label: "CSS3", color: "text-blue-500" },
                      { icon: "fas fa-database", label: "Database", color: "text-gray-300" }
                    ].map((tech, index) => (
                      <motion.div 
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                      >
                        <i className={`${tech.icon} text-3xl ${tech.color} mb-2`}></i>
                        <span className="text-white text-xs">{tech.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

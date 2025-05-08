import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const processes = [
    {
      step: 1,
      title: "Website Development",
      description: "We'll create your website based on your requirements and specifications.",
      icon: "fas fa-code",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      step: 2,
      title: "Demo Preview",
      description: "We'll send you a demo link so you can see and test your website before final delivery.",
      icon: "fas fa-laptop-code",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      step: 3,
      title: "Payment",
      description: "If you're happy with the demo, we'll discuss payment options that work best for you.",
      icon: "fas fa-coins",
      color: "bg-yellow-500/10 text-yellow-500"
    },
    {
      step: 4,
      title: "Project Completion",
      description: "After payment, we'll send you an invoice and all necessary files for your completed project.",
      icon: "fas fa-check-circle",
      color: "bg-green-500/10 text-green-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0],
        delay: i * 0.1
      }
    })
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-secondary rounded-full mr-2"></span>
              <span className="text-secondary font-semibold tracking-wider">OUR PROCESS</span>
              <span className="h-1 w-10 bg-secondary rounded-full ml-2"></span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">How We Work With You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth experience from development to delivery.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processes.map((process, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
            >
              <Card className="card-3d bg-white rounded-xl p-8 morphic-shadow border-none overflow-hidden h-full">
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-start">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${process.color} mr-6 flex-shrink-0`}>
                      <i className={`${process.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700 mr-3">
                          {process.step}
                        </span>
                        <h3 className="text-xl font-bold font-heading">{process.title}</h3>
                      </div>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gray-100 opacity-30 -z-10"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 group"
          >
            <span>Start Your Project Now</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
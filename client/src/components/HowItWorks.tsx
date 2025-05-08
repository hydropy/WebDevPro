import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Requirements",
      description: "Share your website needs and specifications. The more details, the better.",
      icon: "fas fa-message",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      link: {
        text: "Contact us on WhatsApp",
        url: "https://wa.me/919347455431"
      },
      delay: 0
    },
    {
      number: "02",
      title: "Choose Payment Method",
      description: "Select from our flexible payment options that work best for you to begin development.",
      icon: "fas fa-credit-card",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      link: {
        text: "Multiple payment options",
        url: null
      },
      delay: 0.1
    },
    {
      number: "03",
      title: "Receive Your Website",
      description: "Get your website delivered within hours. Review, request tweaks, and go live.",
      icon: "fas fa-rocket",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      link: {
        text: "Same-day or 3-hour delivery",
        url: null
      },
      delay: 0.2
    }
  ];

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
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
        delay: i * 0.1
      }
    })
  };

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-50 dots-pattern"></div>
      
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
              <span className="text-secondary font-semibold tracking-wider">SIMPLE PROCESS</span>
              <span className="h-1 w-10 bg-secondary rounded-full ml-2"></span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get your premium website up and running in record time.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Process Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary/50 via-accent/50 to-secondary/50 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={itemVariants}
              className="z-10"
            >
              <Card className="card-3d bg-white rounded-xl p-8 morphic-shadow transition-all duration-300 border-none relative backdrop-blur-sm bg-white/90 overflow-hidden">
                <CardContent className="p-0">
                  {/* Background decoration */}
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-secondary/5 -z-10"></div>
                  
                  {/* Step number */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-secondary">{index + 1}</span>
                    </div>
                    <span className="text-4xl font-bold text-gray-100">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-5">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center text-secondary">
                    <i className={`${step.icon} mr-2`}></i>
                    {step.link.url ? (
                      <a 
                        href={step.link.url} 
                        className="font-medium hover:underline group transition-all"
                      >
                        {step.link.text}
                        <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    ) : (
                      <span className="font-medium">{step.link.text}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

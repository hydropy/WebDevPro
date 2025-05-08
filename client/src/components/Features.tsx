import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Features = () => {
  const featuresList = [
    {
      icon: "fas fa-paint-brush",
      title: "Modern Design",
      description: "Clean, professional designs that follow the latest web trends and standards.",
      bgColor: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-500",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Fully Responsive",
      description: "Websites that look perfect on all devices: desktop, tablet, and mobile.",
      bgColor: "from-indigo-500 to-purple-400",
      iconColor: "text-indigo-500",
    },
    {
      icon: "fas fa-bolt",
      title: "Lightning Fast",
      description: "Optimized for speed with best practices for performance and loading times.",
      bgColor: "from-yellow-500 to-orange-400",
      iconColor: "text-yellow-500",
    },
    {
      icon: "fas fa-search",
      title: "SEO Friendly",
      description: "Built with search engines in mind to help your site rank higher.",
      bgColor: "from-green-500 to-emerald-400",
      iconColor: "text-green-500",
    },
    {
      icon: "fas fa-lock",
      title: "Secure & Reliable",
      description: "Latest security features and reliable hosting recommendations.",
      bgColor: "from-red-500 to-pink-400",
      iconColor: "text-red-500",
    },
    {
      icon: "fas fa-code",
      title: "Clean Code",
      description: "Well-structured, documented code that's easy to maintain and update.",
      bgColor: "from-violet-500 to-purple-400",
      iconColor: "text-violet-500",
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
        delay: i * 0.05
      }
    })
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background grid pattern */}
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
              <span className="text-secondary font-semibold tracking-wider">OUR SOLUTIONS</span>
              <span className="h-1 w-10 bg-secondary rounded-full ml-2"></span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">What We Deliver</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium websites with advanced features for your business success.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
            >
              <Card 
                className="card-3d bg-white rounded-xl p-8 morphic-shadow border-none relative overflow-hidden h-full"
              >
                <CardContent className="p-0 relative z-10">
                  {/* Feature icon with gradient background */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-50 shadow-sm">
                      <i className={`${feature.icon} text-2xl ${feature.iconColor}`}></i>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br rounded-2xl opacity-10 blur-lg"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-br opacity-5 blur-md"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Extra features highlight section */}
        <motion.div 
          className="mt-16 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-8 md:p-12 bg-gradient-to-r from-secondary/80 to-accent/80 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Premium Features</h3>
                <p className="text-white/80 mb-6">
                  Our websites come with advanced features that set your business apart from the competition.
                </p>
                <div className="flex items-center">
                  <i className="fas fa-arrow-right mr-2"></i>
                  <span>Elevate your online presence</span>
                </div>
              </div>
              
              <div className="col-span-2 grid grid-cols-2 gap-6">
                {[
                  { icon: "fas fa-layer-group", text: "Advanced Animations" },
                  { icon: "fas fa-image", text: "Premium Visuals" },
                  { icon: "fas fa-server", text: "Optimized Hosting" },
                  { icon: "fas fa-shield-alt", text: "Security Protection" },
                  { icon: "fas fa-chart-line", text: "Analytics Integration" },
                  { icon: "fas fa-globe", text: "Global CDN" },
                  { icon: "fas fa-tachometer-alt", text: "Performance Optimization" },
                  { icon: "fas fa-handshake", text: "After-delivery Support" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                      <i className={`${item.icon} text-white`}></i>
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

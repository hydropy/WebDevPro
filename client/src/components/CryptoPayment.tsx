import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const CryptoPayment = () => {
  const cryptoCurrencies = [
    {
      icon: "fab fa-bitcoin",
      color: "#F7931A",
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency, perfect for secure international payments."
    },
    {
      icon: "fas fa-dollar-sign",
      color: "#26A17B",
      name: "Tether (USDT)",
      description: "Stable, dollar-pegged token for predictable payment values."
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: "fas fa-bolt",
      title: "Instant Transactions",
      description: "No waiting for bank processing, transactions confirmed in minutes."
    },
    {
      id: 2,
      icon: "fas fa-chart-line",
      title: "Lower Fees",
      description: "Significantly reduced fees compared to traditional payment methods."
    },
    {
      id: 3,
      icon: "fas fa-globe",
      title: "Global Payments",
      description: "Send payments worldwide without currency conversion hassles."
    },
    {
      id: 4,
      icon: "fas fa-shield-alt",
      title: "Enhanced Security",
      description: "Secure blockchain technology ensures transaction safety."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Project Requirements",
      description: "Discuss your project requirements and get a quote"
    },
    {
      step: 2,
      title: "Wallet Address",
      description: "Receive our wallet address for BTC or USDT payment"
    },
    {
      step: 3,
      title: "Payment",
      description: "Send payment and share transaction ID for verification"
    },
    {
      step: 4,
      title: "Development",
      description: "Development begins immediately after confirmation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-50 dots-pattern"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-secondary rounded-full mr-2"></span>
              <span className="text-secondary font-semibold tracking-wider">SECURE PAYMENTS</span>
              <span className="h-1 w-10 bg-secondary rounded-full ml-2"></span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Crypto Payments Only</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We exclusively accept cryptocurrency payments for fast, secure, and global transactions.
          </p>
        </motion.div>
        
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="card-3d bg-white rounded-xl p-8 morphic-shadow border-none relative overflow-hidden">
              <CardContent className="p-0">
                {/* Background decoration */}
                <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br opacity-5 from-blue-500 to-cyan-400 rounded-full blur-xl"></div>
                <div className="absolute -left-10 -top-10 w-28 h-28 bg-gradient-to-br opacity-5 from-yellow-500 to-orange-400 rounded-full blur-xl"></div>
                
                <h3 className="text-2xl font-bold font-heading mb-6 premium-gradient-text inline-block">Accepted Cryptocurrencies</h3>
                
                {/* Crypto options */}
                <div className="space-y-8 mb-8">
                  {cryptoCurrencies.map((crypto, index) => (
                    <div key={index} className="flex items-start group bg-gray-50 p-5 rounded-xl transition-all hover:shadow-md">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                        style={{ 
                          background: `linear-gradient(135deg, ${crypto.color}20, ${crypto.color}10)`,
                          color: crypto.color
                        }}
                      >
                        <i className={`${crypto.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold font-heading group-hover:text-secondary transition-colors">{crypto.name}</h4>
                        <p className="text-gray-600 mt-1">{crypto.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Why crypto section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 dots-pattern opacity-10"></div>
                  <h4 className="font-bold text-xl mb-5 flex items-center">
                    <i className="fas fa-question-circle mr-2"></i>
                    Why Choose Crypto?
                  </h4>
                  <div className="grid grid-cols-2 gap-5">
                    {benefits.map((benefit) => (
                      <div key={benefit.id} className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
                            <i className={`${benefit.icon} text-secondary`}></i>
                          </div>
                          <h5 className="font-medium">{benefit.title}</h5>
                        </div>
                        <p className="text-sm text-gray-300">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Image with 3D effect */}
            <div className="relative">
              <motion.div 
                className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                  alt="Cryptocurrency payment concept" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 right-8 bg-secondary text-white px-5 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-lock"></i>
                    <span className="font-medium">Secure Transactions</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Payment process */}
            <Card className="card-3d bg-white rounded-xl p-8 morphic-shadow border-none relative overflow-hidden">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold font-heading mb-6 premium-gradient-text inline-block">Payment Process</h4>
                
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="relative mr-4">
                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-secondary/20"></div>
                        )}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">{step.title}</h5>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTA button */}
                <div className="mt-8 text-center">
                  <motion.a
                    href="https://wa.me/919347455431"
                    className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-secondary/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                    <span>Get Started with Crypto Payment</span>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoPayment;

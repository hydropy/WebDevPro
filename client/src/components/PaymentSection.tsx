import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const PaymentSection = () => {
  const paymentMethods = [
    {
      icon: "fas fa-credit-card",
      color: "#4A69BD",
      name: "Credit/Debit Cards",
      description: "Secure payment with major credit and debit cards including Visa, Mastercard, and Amex."
    },
    {
      icon: "fab fa-paypal",
      color: "#003087",
      name: "PayPal",
      description: "Fast and secure payments with buyer protection through your PayPal account."
    },
    {
      icon: "fab fa-bitcoin",
      color: "#F7931A",
      name: "Cryptocurrencies",
      description: "Bitcoin (BTC), Ethereum (ETH), and other major cryptocurrencies accepted."
    },
    {
      icon: "fas fa-university",
      color: "#20BF6B",
      name: "Bank Transfer",
      description: "Direct bank transfers available for both domestic and international clients."
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: "fas fa-lock",
      title: "Secure Transactions",
      description: "All payment methods use industry-standard security protocols and encryption."
    },
    {
      id: 2,
      icon: "fas fa-globe",
      title: "Global Support",
      description: "Payment options available for clients from around the world."
    },
    {
      id: 3,
      icon: "fas fa-bolt",
      title: "Fast Processing",
      description: "Quick payment confirmation to start your project immediately."
    },
    {
      id: 4,
      icon: "fas fa-shield-alt",
      title: "Buyer Protection",
      description: "Many of our payment methods include built-in buyer protection."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Project Requirements",
      description: "Discuss your project requirements and get a detailed quote"
    },
    {
      step: 2,
      title: "Development",
      description: "Our team starts working on your project immediately after confirming requirements"
    },
    {
      step: 3,
      title: "Demo and Review",
      description: "We provide a demo link so you can review and request any adjustments"
    },
    {
      step: 4,
      title: "Payment & Hosting",
      description: "Only after your approval, payment is made and we deploy to your domain or help you get one"
    }
  ];

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
              <span className="text-secondary font-semibold tracking-wider">FLEXIBLE PAYMENTS</span>
              <span className="h-1 w-10 bg-secondary rounded-full ml-2"></span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Multiple Payment Options</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            We offer a variety of payment methods to suit your needs and preferences, making the process seamless and convenient.
          </p>
          
          <div className="mx-auto max-w-3xl bg-gradient-to-r from-accent/10 to-secondary/10 p-4 rounded-xl border border-secondary/20 mb-4">
            <p className="text-lg font-medium flex items-center justify-center gap-2">
              <i className="fas fa-check-circle text-accent"></i>
              <span>You pay only after reviewing and approving the demo website</span>
            </p>
          </div>
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
                
                <h3 className="text-2xl font-bold font-heading mb-6 premium-gradient-text inline-block">Available Payment Methods</h3>
                
                {/* Payment options */}
                <div className="space-y-6 mb-8">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-start group bg-gray-50 p-5 rounded-xl transition-all hover:shadow-md">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                        style={{ 
                          background: `linear-gradient(135deg, ${method.color}20, ${method.color}10)`,
                          color: method.color
                        }}
                      >
                        <i className={`${method.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold font-heading group-hover:text-secondary transition-colors">{method.name}</h4>
                        <p className="text-gray-600 mt-1">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Benefits section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 dots-pattern opacity-10"></div>
                  <h4 className="font-bold text-xl mb-5 flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Payment Benefits
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
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=550&q=80" 
                  alt="Secure online payment concept" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 right-8 bg-secondary text-white px-5 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-shield-alt"></i>
                    <span className="font-medium">Secure & Flexible</span>
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
                    href="https://wa.me/919347455431?text=Hi,%20I'm%20interested%20in%20your%20website%20development%20services.%20I%20understand%20you%20provide%20a%20demo%20first%20and%20only%20collect%20payment%20after%20approval.%20Could%20you%20please%20share%20more%20details%20about%20this%20process?"
                    className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-secondary/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                    <span>Discuss Payment Options</span>
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

export default PaymentSection;

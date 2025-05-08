import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 appear">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get your website up and running in record time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg appear border-none">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Tell Us Your Requirements</h3>
              <p className="text-gray-600 mb-4">
                Share your website needs and specifications. The more details, the better.
              </p>
              <div className="flex items-center text-secondary">
                <i className="fas fa-message mr-2"></i>
                <a href="https://wa.me/919347455431" className="font-medium hover:underline">
                  Contact us on WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* Step 2 */}
          <Card className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg appear border-none" data-delay="100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Make Crypto Payment</h3>
              <p className="text-gray-600 mb-4">
                Send USDT or BTC to our secure wallet address to begin the development process.
              </p>
              <div className="flex items-center text-secondary">
                <i className="fas fa-coins mr-2"></i>
                <span className="font-medium">Secure USDT/BTC transactions</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Step 3 */}
          <Card className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg appear border-none" data-delay="200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Receive Your Website</h3>
              <p className="text-gray-600 mb-4">
                Get your website delivered within hours. Review, request tweaks, and go live.
              </p>
              <div className="flex items-center text-secondary">
                <i className="fas fa-rocket mr-2"></i>
                <span className="font-medium">Same-day or 3-hour delivery</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

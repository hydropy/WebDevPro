import { Card, CardContent } from "@/components/ui/card";

const CryptoPayment = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 appear">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Crypto Payments Only</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We exclusively accept cryptocurrency payments for fast, secure transactions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="appear">
            <Card className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <i className="fab fa-bitcoin text-3xl text-[#F7931A] mr-4"></i>
                  <h3 className="text-xl font-bold font-heading">Bitcoin (BTC)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  The original cryptocurrency, perfect for secure international payments.
                </p>
                
                <div className="flex items-center mb-6">
                  <i className="fas fa-dollar-sign text-3xl text-[#26A17B] mr-4"></i>
                  <h3 className="text-xl font-bold font-heading">Tether (USDT)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Stable, dollar-pegged token for predictable payment values.
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4 mt-4">
                  <h4 className="font-medium mb-2">Why Crypto?</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                      <span>Instant transactions, no waiting for bank processing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                      <span>Lower fees compared to traditional payment methods</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                      <span>Global payments without currency conversion hassles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                      <span>Enhanced privacy and security for both parties</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="appear" data-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Cryptocurrency payment concept" 
              className="rounded-xl shadow-md w-full h-auto object-cover mb-8"
              loading="lazy"
            />
            
            <Card className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <CardContent className="p-0">
                <h4 className="font-bold font-heading text-lg mb-4">Payment Process</h4>
                <ol className="text-gray-600 space-y-4">
                  <li className="flex">
                    <span className="w-6 h-6 bg-secondary rounded-full text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                    <span>Discuss your project requirements and get a quote</span>
                  </li>
                  <li className="flex">
                    <span className="w-6 h-6 bg-secondary rounded-full text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                    <span>Receive our wallet address for BTC or USDT payment</span>
                  </li>
                  <li className="flex">
                    <span className="w-6 h-6 bg-secondary rounded-full text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                    <span>Send payment and share transaction ID for verification</span>
                  </li>
                  <li className="flex">
                    <span className="w-6 h-6 bg-secondary rounded-full text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                    <span>Development begins immediately after confirmation</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoPayment;

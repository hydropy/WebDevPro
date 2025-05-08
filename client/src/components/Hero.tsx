import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="appear">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Get Your Website <span className="text-secondary">Today</span>, Not Next Week
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Same-day or 3-hour website delivery. Professional, responsive, and ready for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white"
                asChild
              >
                <a href="#contact">Start Your Project</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 hover:border-secondary text-gray-700 hover:text-secondary"
                asChild
              >
                <a href="https://wa.me/919347455431" className="flex items-center justify-center gap-2">
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span>Chat on WhatsApp</span>
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 items-center text-gray-600">
              <div className="flex">
                <i className="fas fa-bolt text-accent mr-2"></i>
                <span>Ultra-fast delivery</span>
              </div>
              <div className="flex">
                <i className="fas fa-coins text-accent mr-2"></i>
                <span>Crypto payments</span>
              </div>
            </div>
          </div>
          <div className="appear" data-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional web development workspace" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

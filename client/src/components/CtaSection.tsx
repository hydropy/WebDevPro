import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-primary rounded-xl overflow-hidden shadow-xl appear">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                  Ready to launch your website today?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Get your professional website in as little as 3 hours. Start now and go live today.
                </p>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white" 
                  size="lg"
                  asChild
                >
                  <a href="#contact">Start Your Project</a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://pixabay.com/get/gc9dfc037d5debf405fd1a70aad20bb96844727047c0dba85970856f853894dcc76b2fb9a59c90fc6696bee8b42337b995b8fa2a6c0622ba90d3c7d653dda25aa_1280.jpg" 
                alt="Fast website delivery concept" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

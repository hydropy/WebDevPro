import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const featuresList = [
    {
      icon: "fas fa-paint-brush",
      title: "Modern Design",
      description: "Clean, professional designs that follow the latest web trends and standards.",
      delay: 0
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Fully Responsive",
      description: "Websites that look perfect on all devices: desktop, tablet, and mobile.",
      delay: 100
    },
    {
      icon: "fas fa-bolt",
      title: "Lightning Fast",
      description: "Optimized for speed with best practices for performance and loading times.",
      delay: 200
    },
    {
      icon: "fas fa-search",
      title: "SEO Friendly",
      description: "Built with search engines in mind to help your site rank higher.",
      delay: 300
    },
    {
      icon: "fas fa-lock",
      title: "Secure & Reliable",
      description: "Latest security features and reliable hosting recommendations.",
      delay: 400
    },
    {
      icon: "fas fa-code",
      title: "Clean Code",
      description: "Well-structured, documented code that's easy to maintain and update.",
      delay: 500
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 appear">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What We Deliver</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional websites with all the features you need for success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg appear border border-gray-100" 
              data-delay={feature.delay}
            >
              <CardContent className="p-0">
                <div className="text-accent text-2xl mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

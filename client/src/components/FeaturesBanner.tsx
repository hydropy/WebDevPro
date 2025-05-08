const FeaturesBanner = () => {
  return (
    <section className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="appear">
            <div className="text-3xl font-bold mb-2">3h</div>
            <p className="text-white/80">Express Delivery</p>
          </div>
          <div className="appear" data-delay="100">
            <div className="text-3xl font-bold mb-2">24h</div>
            <p className="text-white/80">Standard Delivery</p>
          </div>
          <div className="appear" data-delay="200">
            <div className="text-3xl font-bold mb-2">100%</div>
            <p className="text-white/80">Satisfaction</p>
          </div>
          <div className="appear" data-delay="300">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <p className="text-white/80">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;

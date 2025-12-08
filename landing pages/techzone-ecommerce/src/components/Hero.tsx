import '../styles/Hero.css'

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="glitch" data-text="GADGETS">
            GADGETS
          </span>
          <span className="subtitle">DO FUTURO</span>
        </h1>
        <p className="hero-description">
          Tecnologia de ponta para revolucionar seu mundo digital
        </p>
        <button className="cta-btn" onClick={scrollToProducts}>
          <span>EXPLORAR PRODUTOS</span>
          <i className="fas fa-rocket"></i>
        </button>
      </div>
      <div className="hero-product">
        <img
          src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500"
          alt="Smartphone Premium"
          className="hero-img"
        />
      </div>
    </section>
  );
};

export default Hero;

import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-wrapper">
        <img src="/images/hero-man.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>SHAPE YOUR BODY</h1>
          <p>Join our fitness club to start your transformation today.</p>
          <a href="#classes" className="hero-btn">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

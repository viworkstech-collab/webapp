import "./Home.css";

const Hero = () => {
  return (
    <section className="hero">

      <h1>
       Building Digital Solutions That Drive Business Growth.
      </h1>

      <p>
        We help startups and enterprises transform ideas into scalable web, mobile, and cloud applications through innovative technology and expert engineering.
      </p>

      <div className="hero-buttons">
        <button className="home-primary-btn">
          Start Project
        </button>

        <button className="home-secondary-btn hover-btn">
          View Portfolio
        </button>
      </div>

    </section>
  );
};

export default Hero;
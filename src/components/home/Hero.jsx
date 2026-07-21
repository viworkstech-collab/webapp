import "./Home.css";

const Hero = () => {
  return (
    <section className="hero">

      <h1>
        Engineering software that
        <br />
        <span>scales</span> with you.
      </h1>

      <p>
        We build architectural foundations for high-growth enterprises.
        Sophisticated technical solutions delivered with Nordic precision
        and editorial clarity.
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
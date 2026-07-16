import "./Careers.css";

const CareersHero = () => {
  return (
    <section className="careers-hero">
      <div className="hero-left">
        <p className="hero-label">JOIN OUR TEAM</p>

        <h1>
          Build the <span>future</span>
          <br />
          with us.
        </h1>

        <p className="hero-description">
          We are a collective of engineers, designers, and dreamers
          dedicated to building high-performance technical infrastructure.
          Explore our open roles and find your next challenge.
        </p>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
          alt="Office"
        />
      </div>
    </section>
  );
};

export default CareersHero;
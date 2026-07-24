import "./Careers.css";

const CareersHero = () => {
  return (
    <section className="careers-hero">
      <div className="hero-left">
        <p className="hero-label">JOIN OUR TEAM</p>

        <h1>
          Build the Future <span className="hover-link"></span>
          <br />
          with us.
        </h1>

        <p className="hero-description">
          At ViworkTech, you'll work alongside passionate developers, designers, 
          and marketers to create innovative digital solutions for businesses worldwide.
           Whether you're a fresher or an experienced professional, you'll find opportunities to learn, innovate, and grow.

        </p>
      </div>

      <div className="hero-right hover-img">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
          alt="Office"
        />
      </div>
    </section>
  );
};

export default CareersHero;
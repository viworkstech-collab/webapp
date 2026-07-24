import "./About.css";

const MissionVision = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">

        <div className="mission-card hover-card">
          <p className="card-number">01 / </p>
          <h2>
          OUR MISSION
            
          </h2>

          <p className="card-text">
            To empower businesses with innovative, reliable, and affordable technology solutions that simplify operations, improve customer experiences, and accelerate digital growth
          </p>
        </div>

        <div className="mission-card hover-card">
          <p className="card-number">02 /</p>

          <h2>
             OUR VISION
          </h2>

          <p className="card-text">
           To become a trusted technology partner for businesses worldwide by delivering impactful digital products powered by creativity, innovation, and emerging technologies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
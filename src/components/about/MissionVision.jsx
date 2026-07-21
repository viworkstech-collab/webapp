import "./About.css";

const MissionVision = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">

        <div className="mission-card hover-card">
          <p className="card-number">01 / OUR MISSION</p>

          <h2>
            To bridge the gap between
            complex engineering and
            human-centric design.
          </h2>

          <p className="card-text">
            We aim to democratize high-end technical infrastructure,
            making it accessible to visionaries who are ready to
            scale without the friction of legacy thinking.
          </p>
        </div>

        <div className="mission-card hover-card">
          <p className="card-number">02 / OUR VISION</p>

          <h2>
            A world where
            technology is an
            invisible enabler.
          </h2>

          <p className="card-text">
            Envisioning a future where the friction between
            idea and execution is zero, powered by robust,
            modular, and intelligent systems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
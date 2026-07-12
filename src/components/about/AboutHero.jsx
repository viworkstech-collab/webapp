import "./About.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-container">

        <p className="about-subtitle">
          ABOUT OUR FIRM
        </p>

        <h1>
          We're engineers who care
          <br />
          about your <span>outcome.</span>
        </h1>

        <p className="about-description">
          ViworkTech was founded on the principle that technical excellence
          should never be detached from business reality. We don't just build
          software; we architect solutions that endure.
        </p>

      </div>
    </section>
  );
};

export default AboutHero;
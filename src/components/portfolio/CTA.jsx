import "./Portfolio.css";

const CTA = () => {
  return (
    <section className="portfolio-cta">

      <h2>Ready to Build Your Next Digital Success Story?</h2>

      <p>
        Whether you're a startup launching your first product or a growing business looking to scale, ViworkTech is ready to help you achieve your goals with modern technology solutions.
      </p>

      <div className="cta-buttons">

        <a href="/contact" className="primary-btn hover-btn">
          Start a Conversation
        </a>

        <a href="/services" className="secondary-btn hover-btn">
          View Services
        </a>

      </div>

    </section>
  );
};

export default CTA;
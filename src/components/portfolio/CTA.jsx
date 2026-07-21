import "./Portfolio.css";

const CTA = () => {
  return (
    <section className="portfolio-cta">

      <h2>Ready to build your next project?</h2>

      <p>
        Let’s discuss how our technical expertise can
        help your business goals.
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
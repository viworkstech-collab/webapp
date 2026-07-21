import { Link } from "react-router-dom";
import "./Services.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <h2>
        Ready to build the foundation for your
        <br />
        next digital breakthrough?
      </h2>

      <div className="cta-buttons">
        <Link to="/contact">
          <button className="primary-btn hover-btn">
            Schedule a Consult
          </button>
        </Link>

        <Link to="/portfolio">
          <button className="secondary-btn hover-btn">
            View Our Portfolio
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
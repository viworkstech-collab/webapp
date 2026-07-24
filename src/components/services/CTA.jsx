import { Link } from "react-router-dom";
import "./Services.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <h2>
        Ready to Build Something Amazing?
      </h2>
        <p>Let's turn your ideas into powerful digital solutions that help your business grow.</p>

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
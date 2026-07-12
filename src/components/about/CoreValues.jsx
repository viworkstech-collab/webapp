import "./About.css";
import {
  FaDraftingCompass,
  FaLightbulb,
  FaTools,
} from "react-icons/fa";

const CoreValues = () => {
  return (
    <section className="core-values">
      <div className="core-container">

        <div className="core-header">
          <h2>Core Values</h2>
          <p>FOUNDATIONAL PRINCIPLES</p>
        </div>

        <div className="core-grid">

          <div className="core-card">
            <FaDraftingCompass className="core-icon" />
            <h3>Structural Integrity</h3>
            <p>
              We believe in building foundations that don't crumble
              under scale. Quality is not a feature; it's the
              requirement.
            </p>
          </div>

          <div className="core-card">
            <FaLightbulb className="core-icon" />
            <h3>Intellectual Honesty</h3>
            <p>
              We prioritize truth over comfort. If a solution isn't
              right for your outcome, we'll tell you before a single
              line of code is written.
            </p>
          </div>

          <div className="core-card">
            <FaTools className="core-icon" />
            <h3>Obsessive Precision</h3>
            <p>
              Details are the difference between a product and an
              experience. We sweat the 1% that others ignore.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoreValues;
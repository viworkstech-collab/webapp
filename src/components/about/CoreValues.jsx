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

          <div className="core-card hover-card">
  <FaDraftingCompass className="core-icon" />
  <h3>Innovation</h3>
  <p>
   We embrace new technologies and creative thinking to build smarter digital solutions.

  </p>
</div>

<div className="core-card hover-card">
  <FaLightbulb className="core-icon" />
  <h3>Quality</h3>
  <p>
    
 Every project is developed with attention to detail, performance, and long-term reliability.

  </p>
</div>

<div className="core-card hover-card">
  <FaTools className="core-icon" />
  <h3>Customer First</h3>
  <p>
    Our clients are our partners. We focus on understanding their goals and delivering solutions that create real business value.

  </p>
</div>
</div>

      </div>
    </section>
  );
};

export default CoreValues;
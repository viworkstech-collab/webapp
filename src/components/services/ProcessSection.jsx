import "./Services.css";
import { processData } from "./data";

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <div>
          <p className="process-subtitle">How We Deliver</p>

          <h2 className="process-title">
           Our Proven Development Process

            <br />
            <span className="hover-link"></span>
          </h2>
        </div>

        <p className="process-text">
          Every successful project starts with a clear strategy and ends with
           measurable business results.

        </p>
      </div>

      <div className="process-cards">
        {processData.map((item, index) => (
          <div className="process-card hover-card" key={index}>
            <p className="phase">{item.phase}</p>

            <h3 className="hover-link">{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
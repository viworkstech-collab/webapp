import "./Services.css";
import { processData } from "./data";

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <div>
          <p className="process-subtitle">How We Deliver</p>

          <h2 className="process-title">
            A framework of
            <br />
            absolute precision.
          </h2>
        </div>

        <p className="process-text">
          Iterative development paired with rigorous QA ensures every line of
          code serves a purpose.
        </p>
      </div>

      <div className="process-cards">
        {processData.map((item, index) => (
          <div className="process-card" key={index}>
            <p className="phase">{item.phase}</p>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
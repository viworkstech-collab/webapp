import "./Home.css";
import {
  FaProjectDiagram,
  FaShieldAlt,
  FaGlobe,
  FaDatabase,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaProjectDiagram />,
    title: "Distributed Systems",
    desc: "Architecting resilient, high-availability microservices that handle millions of concurrent requests without degradation.",
    number: "01 / ARCHITECTURE",
  },
  {
    icon: <FaShieldAlt />,
    title: "Fortified Security",
    desc: "Zero-trust protocols integrated into the DNA of your software.",
    number: "02 / PROTECTION",
  },
  {
    icon: <FaGlobe />,
    title: "Edge Optimization",
    desc: "Minimizing latency through intelligent global delivery.",
    number: "03 / PERFORMANCE",
  },
  {
    icon: <FaDatabase />,
    title: "Data Pipeline",
    desc: "Structured processing for real-time business intelligence.",
    number: "04 / INTELLIGENCE",
  },
  {
    icon: <FaCode />,
    title: "Custom APIs",
    desc: "Cleanly documented, robust interfaces for third-party scaling.",
    number: "05 / INTEGRATION",
  },
  {
    icon: <FaLayerGroup />,
    title: "Legacy Modernization",
    desc: "Transitioning monolithic systems into modern tech stacks with zero downtime.",
    number: "06 / EVOLUTION",
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities">
      <div className="cap-header">
        <div>
          <span className="small-title">CAPABILITIES</span>
          <h2>Tailored Engineering</h2>
        </div>

        <button className="explore-btn">Explore Services</button>
      </div>

      <div className="cap-grid">
        {cards.map((card, index) => (
          <div
  key={index}
  className={`cap-card ${
    index === 0
      ? "large-card"
      : index === 1
      ? "medium-card"
      : index === 5
      ? "full-card"
      : ""
  }`}
>
            <div className="icon">{card.icon}</div>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

            <span>{card.number}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
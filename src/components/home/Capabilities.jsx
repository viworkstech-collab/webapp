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
    title: "Web Application Development",
    desc: "We build responsive, secure, and high-performance web applications tailored to your business goals.",
    number: "01 /Development",
  },
  {
    icon: <FaShieldAlt />,
    title: "Mobile App Development",
    desc: "Create intuitive Android and iOS applications that deliver seamless user experiences.",
    number: "02 /Mobile ",
  },
  {
    icon: <FaGlobe />,
    title: "Cloud Solutions",
    desc: "Deploy scalable cloud infrastructure that improves performance, security, and reliability.",
    number: "03 / Cloud",
  },
  {
    icon: <FaDatabase />,
    title: "UI/UX Design",
    desc: "Design engaging and user-friendly interfaces that enhance customer satisfaction.",
    number: "04 / Design ",
  },
  {
    icon: <FaCode />,
    title: "API Integration",
    desc: "Connect your applications with third-party services using secure and efficient APIs.",
    number: "05 / Integration",
  },
  {
    icon: <FaLayerGroup />,
    title: "Software Maintenance & Support",
    desc: "Ensure your applications remain secure, updated, and optimized with continuous support.",
    number: "06 / Support",
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities">
      <div className="cap-header">
        <div>
          <span className="small-title">OUR EXPERTISE</span>
          <h2>Technology Solutions Designed for Success</h2>
        </div>

        <button className="explore-btn hover-card"></button>
      </div>

      <div className="cap-grid">
        {cards.map((card, index) => (
          <div
  key={index}
  className={`cap-card hover-card ${
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
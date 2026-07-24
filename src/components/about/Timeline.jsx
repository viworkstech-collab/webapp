import "./About.css";

const timelineData = [
  {
    year: "2023",
    title: "ViworkTech Begins",
    description:
      "Started with a vision to help startups build modern digital products.",
  },
  {
    year: "2024",
    title: "Expanded Our Services",
    description:
      "Added UI/UX Design, SEO, and Digital Marketing to provide complete digital solutions.",
  },
  {
    year: "2026",
    title: "Building Future",
    description:
      "Continuing to innovate with AI, automation, cloud technologies, and scalable software solutions for businesses worldwide.",
  },
  
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-container">

        <p className="timeline-small">OUR JOURNEY</p>

        <h2>A Timeline of Growth</h2>

        <div className="timeline">

         {timelineData.map((item, index) => (
  <div
    className={`timeline-item ${
      index % 2 === 0 ? "left" : "right"
    }`}
    key={index}
  >
    <div className="timeline-content hover-card">
      <small>{item.year}</small>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
))}

        </div>

      </div>
    </section>
  );
};

export default Timeline;
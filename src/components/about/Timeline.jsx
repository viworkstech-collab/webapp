import "./About.css";

const timelineData = [
  {
    year: "2018",
    title: "The Genesis",
    description:
      "ViworkTech was founded in a small studio with a mission to redefine technical consulting through an engineering-first lens.",
  },
  {
    year: "2020",
    title: "Scaling Resilience",
    description:
      "Amidst global shifts, we doubled our headcount and shifted to a distributed architectural model, helping partners navigate digital transformation.",
  },
  {
    year: "2022",
    title: "Global Portfolio",
    description:
      "Secured our first Fortune 500 partnership, delivering a bespoke data-processing engine that handled millions of transactions daily.",
  },
  {
    year: "PRESENT",
    title: "Future Engineering",
    description:
      "Today, we continue to push the boundaries of WebGL, AI integration, and robust cloud systems for a global client base.",
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
import "./Home.css";

const stats = [
  {
    number: "120+",
    label: "SYSTEMS LAUNCHED",
  },
  {
    number: "99.9%",
    label: "UPTIME AVERAGE",
  },
  {
    number: "14ms",
    label: "MEDIAN LATENCY",
  },
  {
    number: "24/7",
    label: "ACTIVE MONITORING",
  },
];

const Stats = () => {
  return (
    <section className="home-stats-section ">
      {stats.map((item, index) => (
        <div className="home-stat-card hover-card" key={index}>
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
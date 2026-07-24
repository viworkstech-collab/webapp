import "./Home.css";

const stats = [
  {
    number: "150+",
    label: "Projects Successfully Delivered",
  },
  {
    number: "99.9%",
    label: "Client Satisfaction",
  },
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "24/7",
    label: "Technical Support",
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
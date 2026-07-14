const PositionCard = ({ department, title, location }) => {
  return (
    <div className="position-card">
      <div>
        <span className="department">{department}</span>

        <h3>{title}</h3>
      </div>

      <div className="position-right">
        <p>{location}</p>

        <a href="/">APPLY NOW</a>
      </div>
    </div>
  );
};

export default PositionCard;
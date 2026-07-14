import PositionCard from "./PositionCard";

const OpenPositions = () => {
  return (
    <section className="positions">
      <p className="positions-label">OPEN POSITIONS (04)</p>

      <PositionCard
        department="ENGINEERING"
        title="Senior Fullstack Engineer"
        location="Remote / Full-time"
      />

      <PositionCard
        department="DESIGN"
        title="Product Designer (Systems)"
        location="Berlin or Remote"
      />

      <PositionCard
        department="OPERATIONS"
        title="Technical Project Manager"
        location="New York / Hybrid"
      />

      <PositionCard
        department="MARKETING"
        title="Growth & Data Analyst"
        location="Remote"
      />
    </section>
  );
};

export default OpenPositions;
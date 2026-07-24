import PositionCard from "./PositionCard";

const OpenPositions = () => {
  return (
    <section className="positions">
      <p className="positions-label">OPEN POSITIONS (04)</p>

      <PositionCard
        department="ENGINEERING"
        title="Frontend Developer"
        location="Remote / Full-time"
      />

      <PositionCard
        department="DESIGN"
        title="Flutter Developer"
        location="Berlin or Remote"
      />

      <PositionCard
        department="OPERATIONS"
        title="React Developer"
        location="New York / Hybrid"
      />

      <PositionCard
        department="MARKETING"
        title="UI/UX Designer"
        location="Remote"
      />
      <PositionCard
        department="MARKETING"
        title="Digital Marketing Executive"
        location="Remote"
      />
    </section>
  );
};

export default OpenPositions;
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-header">
        <h2>Engineering the ideal work environment.</h2>

        <p>
          We prioritize focus, health, and continuous growth through structured
          benefits designed for the modern engineer.
        </p>
      </div>

      <div className="benefits-grid">
        <BenefitCard
          title="Remote First"
          description="Synchronous work when it matters, deep focus time when it counts. Anywhere in the world."
        />

        <BenefitCard
          title="Growth Fund"
          description="Annual $5k budget for books, courses, conferences, and specialized technical certifications."
        />

        <BenefitCard
          title="Total Wellness"
          description="Comprehensive medical, dental, and vision plus a dedicated monthly mental health stipend."
        />
      </div>
    </section>
  );
};

export default Benefits;
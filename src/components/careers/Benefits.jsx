import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-header">
        <h2>Why You'll Love Working at ViworkTech.</h2>

        <p>
          At ViworkTech, you'll work alongside passionate developers, designers, and marketers to create innovative digital solutions for businesses worldwide. Whether you're a fresher or an experienced professional, you'll find opportunities to learn, innovate, and grow.

        </p>
      </div>

      <div className="benefits-grid">
        <BenefitCard
          title="Continuous Learning"
          description="Access mentorship, technical workshops, certifications, and real-world project experience."
        />

        <BenefitCard
          title="Flexible Work Environment"
          description="Hybrid and remote opportunities that support productivity and work-life balance."
        />

        <BenefitCard
          title="Career Growth"
          description="Clear career paths, performance recognition, and leadership opportunities."
        />
        <BenefitCard
          title="Collaborative Culture"
          description="Work with supportive teammates who encourage innovation and knowledge sharing."
        />
      </div>
    </section>
  );
};

export default Benefits;
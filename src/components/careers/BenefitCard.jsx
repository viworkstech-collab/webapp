const BenefitCard = ({ title, description }) => {
  return (
    <div className="benefit-card hover-card">
      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;
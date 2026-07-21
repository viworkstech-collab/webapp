import "./Portfolio.css";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card hover-card">

      <div className="project-image hover-img">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default ProjectCard;
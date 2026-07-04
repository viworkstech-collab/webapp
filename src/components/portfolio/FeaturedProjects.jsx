import "./Portfolio.css";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">

      {/* BIG CARD */}

      <ProjectCard
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
        title="Quantum"
        description="Cloud infrastructure solution"
      />



      {/* TWO SMALL CARDS */}

      <div className="small-cards-row">

        <div className="small-project">

          <ProjectCard
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            title="Infrared"
            description="Security and monitoring"
          />

        </div>



        <div className="small-project">

          <ProjectCard
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            title="Nova"
            description="AI systems"
          />

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;
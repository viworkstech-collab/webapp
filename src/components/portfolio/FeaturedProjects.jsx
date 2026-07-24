import "./Portfolio.css";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">

      {/* BIG CARD */}

      <ProjectCard
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
        title="E-Commerce Website"
        Category=" Web Development" 
        description="Designed a scalable online store with secure payment integration, responsive design, and SEO optimization to increase sales and customer engagement"
      />



      {/* TWO SMALL CARDS */}

      <div className="small-cards-row">

        <div className="small-project">

          <ProjectCard
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            title="Social Media Marketing Campaign"
            Category="Digital Marketing"

            description="Created targeted advertising campaigns that increased brand awareness and customer acquisition."
          />

        </div>



        <div className="small-project">

          <ProjectCard
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            title="AI Customer Support Assistant"
            Category="AI Solutions "

            description="Developed an AI-powered chatbot capable of handling customer inquiries, reducing response times, and improving customer satisfaction."
          />

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;
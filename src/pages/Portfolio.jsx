import PortfolioHero from "../components/portfolio/PortfolioHero";
import FeaturedProjects from "../components/portfolio/FeaturedProjects";
import Stats from "../components/portfolio/Stats";
import CTA from "../components/portfolio/CTA";
import Footer from "../components/common/Footer";
const Portfolio = () => {
  return (
    <>
      <PortfolioHero />
      <FeaturedProjects />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
};

export default Portfolio;
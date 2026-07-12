import Hero from "../components/home/Hero";
import ClientLogos from "../components/home/ClientLogos";
import Capabilities from "../components/home/Capabilities";
import Stats from "../components/home/Stats";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Capabilities />
      <Stats />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
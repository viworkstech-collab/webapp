import "./Home.css";
import {
  FaCube,
  FaCloud,
  FaDraftingCompass,
  FaGlobe,
  FaAtom,
} from "react-icons/fa";

const clients = [
  { icon: <FaCube />, name: "LUMINA TECH" },
  { icon: <FaDraftingCompass />, name: "VERTEX ARCH" },
  { icon: <FaCloud />, name: "STRATUS SYSTEMS" },
  { icon: <FaGlobe />, name: "QUANTUM LOGIC" },
  { icon: <FaAtom />, name: "ORBITAL ENERGY" },
];

const ClientLogos = () => {
  return (
    <section className="clients">
      {clients.map((client, index) => (
        <div className="client-item" key={index}>
          <span className="client-icon">{client.icon}</span>
          <span>{client.name}</span>
        </div>
      ))}
    </section>
  );
};

export default ClientLogos;
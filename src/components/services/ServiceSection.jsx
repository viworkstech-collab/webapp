import "./Services.css";
import { services } from "./data";

const ServiceSection = () => {
  return (
    <section className="service-section">
      {services.map((service) => (
        <div className="service-card" key={service.id}>
          {/* Left Side */}
          <div className="service-left">
            <span className="service-number">{service.id}</span>

            <div>
              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <div className="tags">
                {service.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="deliverables">
            <h4>Core Deliverables</h4>

            <ul>
              {service.deliverables.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
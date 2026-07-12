import "./Home.css";
import building from "../../assets/building.jpg";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-left">
        <h2>
          Insights from the forefront
          <br />
          of software.
        </h2>

        <p>
          Join 5,000+ engineers and product leaders who receive our monthly
          brief on architectural trends and performance engineering.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Email Address"
          />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="newsletter-right">
        <img src={building} alt="Building" />
      </div>
    </section>
  );
};

export default Newsletter;
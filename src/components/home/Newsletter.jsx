import "./Home.css";
import building from "../../assets/building.jpg";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-left">
        <h2>
          Stay Ahead with Technology Insights
        </h2>

        <p>
          Subscribe to receive the latest updates on software development, digital transformation, AI innovations, and industry trends directly to your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Email Address"
          />

          <button className="hover-btn">
            Subscribe
          </button>
        </div>
      </div>

      <div className="newsletter-right hover-img">
        <img src={building} alt="Building" />
      </div>
    </section>
  );
};

export default Newsletter;
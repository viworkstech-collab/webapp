import "./Contact.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">

          <h1>
            Let's <span>build</span> something
            <br />
            together.
          </h1>

          <div className="contact-info">

            <div>
              <h4>Email us</h4>
              <p>hello@viworktech.com</p>
            </div>

            <div>
              <h4>Call us</h4>
              <p>+1 (234) 567-890</p>
            </div>

            <div>
              <h4>Visit our studio</h4>
              <p>
                124 Architectural Way,
                <br />
                Stockholm, SE 111 22
              </p>
            </div>

          </div>

          <div className="social-icons">
            <button><FaInstagram /></button>
            <button><FaLinkedinIn /></button>
            <button><FaGlobe /></button>
          </div>

        </div>

        {/* Right Side */}
        <div className="contact-form">

          <div className="row">

            <div className="input-box">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="input-box">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>

          </div>

          <div className="input-box">
            <label>Interested In</label>
            <input type="text" placeholder="Product Design" />
          </div>

          <div className="input-box">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Tell us about your project goals..."
            ></textarea>
          </div>

          <button className="send-btn">
            Send Inquiry
          </button>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;
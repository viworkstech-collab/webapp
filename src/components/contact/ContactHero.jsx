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
            Your Digital Transformation 
            Starts Here.

             <span className="hover-link"></span> 
            <br />

          </h1>

          <div className="contact-info">

            <div>
              <h4>Email us</h4>
              <p>viworkstech@gmail.com</p>
            </div>

            

            <div>
              <h4>Visit our studio</h4>
              <p>
                80/1 , 12 th Main road 
                1st cross near MSRIT Bengaluru KA-54
                <br />
                 MSRIT Bengaluru KA-54
              </p>
            </div>

          </div>

          <div className="social-icons">
            <button className="hover-btn"><FaInstagram /> 
            <a href="https://www.instagram.com/letsviworktech?igsh=MmMxcW02M3p3NWNu" target="_blank">
            </a>
            </button>
            <button className="hover-btn"><FaLinkedinIn />
            <a href=" https://www.linkedin.com/in/viwork-tech-55b756394/ " target="_blank">
            </a>
            </button>
           
          </div>

        </div>

        {/* Right Side */}
        <div className="contact-form hover-card">

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

          <button className="send-btn hover-btn">
            Send Inquiry
          </button>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;
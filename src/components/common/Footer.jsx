import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h2>ViworkTech</h2>
        <p>Engineering excellence since 2018.</p>
      </div>

      <div className="footer-links">

        <div className="footer-column">
          <h4>Services</h4>
          <a href="#">Cloud Engineering</a>
          <a href="#">Security Audits</a>
          <a href="#">Data Pipelines</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>

          <p className="copyright">
            © 2024 ViworkTech. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h1>ViworkTech</h1>
            <p>Engineering excellence since 2018.</p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <h3>SERVICES</h3>
              <a href="/">Cloud Engineering</a>
              <a href="/">Security Audits</a>
              <a href="/">Data Pipelines</a>
            </div>

            <div className="footer-column">
              <h3>COMPANY</h3>
              <a href="/">About</a>
              <a href="/" className="highlight">Careers</a>
              <a href="/">Contact</a>
            </div>

            <div className="footer-column">
              <h3>LEGAL</h3>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2024 ViworkTech. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
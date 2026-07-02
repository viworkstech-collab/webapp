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
              <a href="/" className="highlight">Cloud Engineering</a>
              <a href="/" className="highlight">Security Audits</a>
              <a href="/" className="highlight">Data Pipelines</a>
            </div>

            <div className="footer-column">
              <h3>COMPANY</h3>
              <a href="/" className="highlight">About</a>
              <a href="/" className="highlight">Careers</a>
              <a href="/" className="highlight">Contact</a>
            </div>

            <div className="footer-column">
              <h3>LEGAL</h3>
              <a href="/" className="highlight">Privacy Policy</a>
              <a href="/" className="highlight">Terms of Service</a>
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
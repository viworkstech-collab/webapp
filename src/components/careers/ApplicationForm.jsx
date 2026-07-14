const ApplicationForm = () => {
  return (
    <section className="application">
      <div className="application-box">
        <h2>Ready to begin?</h2>

        <p>
          Fill out the form below and our team will be in touch within 48 hours.
        </p>

        <form className="application-form">

          <div className="form-group">
            <label>FULL NAME</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label>DESIRED POSITION</label>
            <select>
              <option>Select a role...</option>
            </select>
          </div>

          <div className="form-group">
            <label>LINK TO PORTFOLIO / LINKEDIN</label>
            <input type="text" placeholder="https://" />
          </div>

          <div className="form-group full-width">
            <label>COVER LETTER / WHY VIWORKTECH?</label>

            <textarea
              rows="5"
              placeholder="Tell us about your technical philosophy..."
            ></textarea>
          </div>

          <button type="submit">
            SUBMIT APPLICATION
          </button>

        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
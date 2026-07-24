import "./Contact.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  "How soon will I receive a response?",
  "Do you offer free consultations?",
  "Do you offer free consultations?",
  "Do you develop both Android and iOS apps?"
];

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq-container">

        <div className="faq-left">
          <h2>FAQ</h2>
          <p>
            Common questions about our process,
            timelines, and how we deliver value.
          </p>
        </div>

        <div className="faq-right">
          {faqs.map((question, index) => (
            <div className="faq-item" key={index}>
              <span>{question}</span>
              <FaChevronDown />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
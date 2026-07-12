import "./Contact.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  "What is your typical project timeline?",
  "Do you offer post-launch support?",
  "How do we start a collaboration?",
  "What technologies do you specialize in?"
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
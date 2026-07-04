import { useMemo, useState } from "react";
import "./Contact.css";

import { FiSend } from "react-icons/fi";

import { contactInfo, socialLinks } from "./contactData";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const messageLength = useMemo(() => formData.message.length, [formData.message]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please share a short project summary.";
    } else if (formData.message.trim().length < 12) {
      nextErrors.message = "Your message should be at least 12 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "error", message: "Please fix the highlighted fields before sending." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending your message..." });

    window.setTimeout(() => {
      setFormData(initialForm);
      setIsSubmitting(false);
      setStatus({ type: "success", message: "Thanks! Your message has been prepared for follow-up." });
    }, 900);
  };

  const fieldClassName = (name) => `input-group ${errors[name] ? "has-error" : ""}`;

  return (
    <section id="contact" className="px-10 py-8 contact section">
      <div className="section-title md:-mb-110">
        <h2>
          Contact <span>Me</span>
        </h2>

        <p>
          Open to full-time opportunities, freelance work and interesting
          collaborations.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-form-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className={fieldClassName("name")}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "invalid" : ""}
                />
                {errors.name ? <span className="field-error">{errors.name}</span> : null}
              </div>

              <div className={fieldClassName("email")}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "invalid" : ""}
                />
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </div>
            </div>

            <div className={fieldClassName("message")}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "invalid" : ""}
              />
              <div className="field-meta">
                <span className={errors.message ? "field-error" : "field-hint"}>
                  {errors.message || "Share the details, scope, and timeline."}
                </span>
                <span className="char-count">{messageLength}/220</span>
              </div>
            </div>

            <button className="send-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <FiSend />
            </button>

            {status.message ? (
              <p className={`form-status ${status.type}`} aria-live="polite">
                {status.message}
              </p>
            ) : null}
          </form>
        </div>

        <div className="contact-side">
          <div className="info-card">
            <h3 className="text-primary text-2xl">Contact Info</h3>

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div className="info-item" key={item.title}>
                  <div className="icon">
                    <Icon />
                  </div>

                  <div>
                    <small>{item.title}</small>

                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="social-card">
            <h3 className="text-accent text-xl">Find me on</h3>

            <div className="socials">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a key={index} href={item.url} target="_blank" rel="noreferrer">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
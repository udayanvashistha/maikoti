import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./contactform.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  visitType: "General inquiry",
  message: "",
};

const supportChannels = [
  {
    title: "Email Us",
    value: "hello@maikoti.in",
    description: "Best for trip planning, local guidance, and collaboration requests.",
    link: "mailto:hello@maikoti.in",
  },
  {
    title: "Visit Region",
    value: "Maikoti, Rudraprayag",
    description: "Located in Uttarakhand, India, with access from Tilwara and Rudraprayag.",
  },
  {
    title: "Response Window",
    value: "Within 1 to 2 days",
    description: "Use the form for organized requests. We prioritize complete messages.",
  },
];

const reasons = [
  "Travel planning",
  "Village culture",
  "Photography visit",
  "Events and festivals",
];

const buildMailtoLink = (form) => {
  const subject = form.subject.trim() || "Inquiry from Maikoti website";
  const body = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Topic: ${form.visitType}`,
    "",
    form.message.trim(),
  ].join("\n");

  return `mailto:hello@maikoti.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const validateForm = (form) => {
  if (!form.name.trim()) {
    return "Enter your name.";
  }

  if (!form.email.trim()) {
    return "Enter your email address.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return "Enter a valid email address.";
  }

  if (!form.message.trim()) {
    return "Enter a message.";
  }

  if (form.message.trim().length < 20) {
    return "Message should be at least 20 characters.";
  }

  return "";
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT?.trim() || "";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const error = validateForm(form);

    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setIsSubmitting(true);

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setForm(initialForm);
        setStatus({
          type: "success",
          message: "Your message has been sent.",
        });
        return;
      }

      window.location.href = buildMailtoLink(form);
      setStatus({
        type: "info",
        message:
          "Your email app should open now. If it does not, write to hello@maikoti.in directly.",
      });
    } catch (errorObject) {
      setStatus({
        type: "error",
        message:
          "Message delivery failed. Email hello@maikoti.in directly while the form backend is being configured.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-page__main">
        <section className="contact-hero">
          <div className="contact-hero__backdrop" aria-hidden="true" />
          <div className="contact-hero__content">
            <div className="contact-hero__copy">
              <span className="contact-hero__eyebrow">Contact Maikoti</span>
              <h1 className="contact-hero__title">
                Plan your visit, ask a question, or start a conversation.
              </h1>
              <p className="contact-hero__text">
                Reach out for travel help, local guidance, event information,
                or partnerships. Use the form below or write to us directly and
                include enough detail for a useful reply.
              </p>

              <div className="contact-hero__chips">
                {reasons.map((reason) => (
                  <span key={reason} className="contact-chip">
                    {reason}
                  </span>
                ))}
              </div>
            </div>

            <div className="contact-hero__panel">
              <p className="contact-hero__panel-label">Direct contact</p>
              <a className="contact-hero__panel-value" href="mailto:hello@maikoti.in">
                hello@maikoti.in
              </a>
              <p className="contact-hero__panel-text">
                Include your dates, group size, and purpose if your question is
                visit-related. That produces faster replies.
              </p>

              <div className="contact-hero__stats">
                <div className="contact-stat">
                  <span className="contact-stat__value">1-2 days</span>
                  <span className="contact-stat__label">Typical response</span>
                </div>
                <div className="contact-stat">
                  <span className="contact-stat__value">Rudraprayag</span>
                  <span className="contact-stat__label">Region</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-content__grid">
            <div className="contact-details">
              <div className="contact-section-heading">
                <span className="contact-section-heading__eyebrow">
                  Support channels
                </span>
                <h2 className="contact-section-heading__title">
                  Reach the team the right way.
                </h2>
                <p className="contact-section-heading__text">
                  Choose the fastest contact path for your question and share
                  the details that matter.
                </p>
              </div>

              <div className="contact-cards">
                {supportChannels.map((channel) => (
                  <article key={channel.title} className="contact-card">
                    <h3 className="contact-card__title">{channel.title}</h3>
                    {channel.link ? (
                      <a className="contact-card__value" href={channel.link}>
                        {channel.value}
                      </a>
                    ) : (
                      <p className="contact-card__value">{channel.value}</p>
                    )}
                    <p className="contact-card__description">
                      {channel.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="contact-note">
                <h3 className="contact-note__title">What to include</h3>
                <ul className="contact-note__list">
                  <li>Preferred travel dates or season</li>
                  <li>Number of visitors</li>
                  <li>Purpose of inquiry</li>
                  <li>Any local experience you want help planning</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="contact-section-heading contact-section-heading--compact">
                <span className="contact-section-heading__eyebrow">
                  Send a message
                </span>
                <h2 className="contact-section-heading__title">
                  Start with a complete request.
                </h2>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label className="contact-field">
                    <span className="contact-field__label">Name</span>
                    <input
                      className="contact-field__input"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </label>

                  <label className="contact-field">
                    <span className="contact-field__label">Email</span>
                    <input
                      className="contact-field__input"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label className="contact-field">
                    <span className="contact-field__label">Subject</span>
                    <input
                      className="contact-field__input"
                      type="text"
                      name="subject"
                      placeholder="What do you need help with?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="contact-field">
                    <span className="contact-field__label">Topic</span>
                    <select
                      className="contact-field__input"
                      name="visitType"
                      value={form.visitType}
                      onChange={handleChange}
                    >
                      <option>General inquiry</option>
                      <option>Trip planning</option>
                      <option>Photography visit</option>
                      <option>Events and festivals</option>
                      <option>Partnership or media</option>
                    </select>
                  </label>
                </div>

                <label className="contact-field">
                  <span className="contact-field__label">Message</span>
                  <textarea
                    className="contact-field__input contact-field__input--textarea"
                    name="message"
                    placeholder="Tell us what you need, when you want to visit, and any specific questions."
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>

                {status.message ? (
                  <div
                    className={`contact-status contact-status--${status.type}`}
                    role="status"
                  >
                    {status.message}
                  </div>
                ) : null}

                <div className="contact-form__actions">
                  <button
                    className="contact-button contact-button--primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>

                  <a
                    className="contact-button contact-button--secondary"
                    href="mailto:hello@maikoti.in"
                  >
                    Email directly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactForm;

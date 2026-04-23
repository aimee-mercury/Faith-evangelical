import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const visitInfo = [
  {
    icon: "🕐",
    title: "Service Times",
    content: (
      <>
        <p>Mon – Sat: Morning Glory 6:00 – 7:00 AM</p>
        <p>Sunday 1st Service: 8:00 – 10:00 AM</p>
        <p>Sunday 2nd Service: 10:00 AM – 12:30 PM</p>
        <p>Wednesday: 5:00 PM – 8:00 PM</p>
        <p>Friday: Praise &amp; Worship 5:00 – 8:00 PM</p>
      </>
    ),
  },
  {
    icon: "👗",
    title: "What to Wear",
    content: (
      <p>
        Come as you are! We welcome everyone in smart casual or traditional dress.
        There is no dress code — just come with an open heart.
      </p>
    ),
  },
  {
    icon: "🧒",
    title: "Children",
    content: (
      <p>
        We have a dedicated Children's Ministry during both Sunday services. Your children
        will be cared for in a safe, fun, and faith-filled environment.
      </p>
    ),
  },
  {
    icon: "📍",
    title: "Where We Meet",
    content: (
      <p>
        Main Sanctuary
        <br />
        Faith Evangelical Church Rwanda
        <br />
        Kigali, Rwanda
      </p>
    ),
  },
];

export default function NewHereSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section section--sand" id="new-here">
      <div className="container">
        <SectionHeading
          kicker="First time?"
          title="New here? We'd love to welcome you"
          align="center"
        />

        <div className="newHereGrid">
          <div className="newHereInfo">
            {visitInfo.map((v) => (
              <article key={v.title} className="visitCard">
                <span className="visitCard__icon" aria-hidden="true">{v.icon}</span>
                <h3 className="visitCard__title">{v.title}</h3>
                {v.content}
              </article>
            ))}
          </div>

          <div className="newHereForm">
            <h3 className="newHereForm__title">Planning to visit?</h3>
            <p className="newHereForm__subtitle">
              Let us know — we'll have someone ready to welcome you personally when you arrive.
            </p>

            {submitted ? (
              <div className="formSuccess">
                <span aria-hidden="true">✅</span>
                <p>
                  Thank you! We look forward to welcoming you. Bishop Isaac or a member of
                  our team will be in touch soon. God bless you!
                </p>
              </div>
            ) : (
              <form className="visitForm" onSubmit={handleSubmit} noValidate>
                <input
                  className="formInput"
                  type="text"
                  placeholder="Your name"
                  required
                  aria-label="Your name"
                />
                <input
                  className="formInput"
                  type="tel"
                  placeholder="Your phone number"
                  required
                  aria-label="Your phone number"
                />
                <input
                  className="formInput"
                  type="text"
                  placeholder="Which service will you attend? (e.g. Sunday 9 AM)"
                  aria-label="Planned service"
                />
                <textarea
                  className="formInput formInput--textarea"
                  placeholder="Any questions for us before you visit?"
                  rows={3}
                  aria-label="Questions"
                />
                <button className="btn btn--cream" type="submit">
                  I'm Planning to Visit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

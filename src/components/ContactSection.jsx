import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icon.jsx";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section section--sand" id="contact">
      <div className="container">
        <SectionHeading kicker="Get in touch" title="We'd love to hear from you" align="center" />

        <div className="contactGrid">
          {/* Info column */}
          <div className="contactInfo">
            <div className="contactDetail">
              <h3 className="contactDetail__title">📍 Address</h3>
              <p>
                Faith Evangelical Church Rwanda
                <br />
                32GW+V53, Kigali, Rwanda
                <br />
                <a
                  href="https://maps.google.com/?q=-1.922823,30.045437"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions →
                </a>
              </p>
            </div>

            <div className="contactDetail">
              <h3 className="contactDetail__title">📞 Phone</h3>
              <p>
                <a href="tel:+250788852050">+250 788 852 050</a> — Bishop Isaac Karamira
                <br />
                <a href="tel:+250788877912">+250 788 877 912</a> — Apostle Jane Karamira
              </p>
            </div>

            <div className="contactDetail">
              <h3 className="contactDetail__title">🕐 Service Times</h3>
              <p>
                Mon – Sat: Morning Glory 6:00 – 7:00 AM
                <br />
                Sunday 1st Service: 8:00 – 10:00 AM
                <br />
                Sunday 2nd Service: 10:00 AM – 12:30 PM
                <br />
                Wednesday: 5:00 PM – 8:00 PM
                <br />
                Friday: Praise &amp; Worship 5:00 – 8:00 PM
              </p>
            </div>

            <div className="contactDetail">
              <h3 className="contactDetail__title">🗓️ Office Hours</h3>
              <p>
                Monday – Friday: 9:00 AM – 5:00 PM
                <br />
                Saturday: 9:00 AM – 1:00 PM
              </p>
            </div>

            <div className="contactSocial">
              <a
                className="iconBtn"
                href="https://facebook.com/faithevangelicalrwanda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon name="facebook" />
              </a>
              <a
                className="iconBtn"
                href="https://youtube.com/@faithevangelicalrwanda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Icon name="youtube" />
              </a>
              <a
                className="iconBtn"
                href="https://instagram.com/faithevangelicalrwanda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="instagram" />
              </a>
              <a
                className="iconBtn"
                href="https://wa.me/250788852050"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="contactForm">
            {submitted ? (
              <div className="formSuccess">
                <span aria-hidden="true">✅</span>
                <p>
                  Thank you for reaching out! We'll get back to you within 24–48 hours.
                  God bless you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="contactForm__title">Send us a message</h3>
                <input
                  className="formInput"
                  type="text"
                  placeholder="Your name"
                  required
                  aria-label="Your name"
                />
                <input
                  className="formInput"
                  type="email"
                  placeholder="Your email address"
                  required
                  aria-label="Your email"
                />
                <input
                  className="formInput"
                  type="tel"
                  placeholder="Your phone number"
                  aria-label="Your phone"
                />
                <textarea
                  className="formInput formInput--textarea"
                  placeholder="Your message..."
                  rows={5}
                  required
                  aria-label="Your message"
                />
                <button className="btn btn--cream" type="submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map embed — Kigali, Rwanda */}
        <div className="mapEmbed">
          <iframe
            title="Faith Evangelical Church Rwanda — exact location"
            src="https://maps.google.com/maps?q=-1.922823,30.045437&z=17&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

import Icon from "./Icon.jsx";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/Logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">

        {/* Col 1 — Brand & contact */}
        <div>
          <Link className="footer__logo" to="/" aria-label="Faith Evangelical Church Rwanda">
            <img src={logoSrc} alt="Faith Evangelical Church Rwanda" className="footer__logoImg" />
          </Link>
          <p className="footer__text">© 2026 Faith Evangelical Church Rwanda. All rights reserved.</p>
          <p className="footer__text">📍 Kigali, Rwanda</p>
          <p className="footer__text">
            📞 Bishop Isaac: <a href="tel:+250788852050">+250 788 852 050</a>
          </p>
          <p className="footer__text">
            📞 Apostle Jane: <a href="tel:+250788877912">+250 788 877 912</a>
          </p>
          <p className="footer__serviceTimes">
            <strong>Mon–Sat:</strong> Morning Glory 6:00 – 7:00 AM
            <br />
            <strong>Sunday:</strong> 1st 8:00–10:00 AM | 2nd 10:00 AM–12:30 PM
            <br />
            <strong>Wednesday:</strong> 5:00 PM – 8:00 PM
            <br />
            <strong>Friday:</strong> Praise &amp; Worship 5:00 – 8:00 PM
          </p>
        </div>

        {/* Col 2 — Quick links */}
        <div>
          <p className="footer__heading">Quick Links</p>
          <a className="footer__link" href="/#about">About Us</a>
          <a className="footer__link" href="/#sermons">Sermons</a>
          <a className="footer__link" href="/#events">Events</a>
          <a className="footer__link" href="/#ministries">Ministries</a>
          <a className="footer__link" href="/#give">Give</a>
          <a className="footer__link" href="/#new-here">New Here?</a>
          <a className="footer__link" href="/#prayer">Prayer Requests</a>
          <a className="footer__link" href="/#contact">Contact</a>
          <Link className="footer__link" to="/gallery">Photo Gallery</Link>
        </div>

        {/* Col 3 — Social */}
        <div>
          <p className="footer__heading">Connect With Us</p>
          <div className="footer__social">
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
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <a className="footer__link" href="/#prayer">🙏 Submit a Prayer Request</a>
            <a className="footer__link" href="/#new-here">👋 New to our church?</a>
          </div>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <p className="footer__heading footer__heading--big">
            Stay connected
            <br />
            with our community
          </p>
          <form
            className="footer__form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="footer__input"
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />
            <button className="btn btn--cream footer__submit" type="submit">
              Subscribe
            </button>
          </form>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            {" · "}
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

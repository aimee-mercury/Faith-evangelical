import Icon from "./Icon.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="footer__logo" to="/">
            Faith Evangelical Church
          </Link>
          <p className="footer__text">© 2026 Faith Evangelical Church. All rights reserved.</p>
          <p className="footer__text">Address: 123 Community Ave, Your City</p>
          <p className="footer__text">Phone: (000) 000-0000</p>
        </div>

        <div>
          <p className="footer__heading">Quicklinks</p>
          <Link className="footer__link" to="/about">
            About us
          </Link>
          <Link className="footer__link" to="/sermons">
            Sermons
          </Link>
          <Link className="footer__link" to="/blog">
            Blog
          </Link>
        </div>

        <div>
          <p className="footer__heading">Connect</p>
          <div className="footer__social">
            <a className="iconBtn" href="#" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a className="iconBtn" href="#" aria-label="Twitter">
              <Icon name="twitter" />
            </a>
            <a className="iconBtn" href="#" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </div>
        </div>

        <div>
          <p className="footer__heading footer__heading--big">
            Subscribe to get latest
            <br />
            updates and news
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
              placeholder="Yourmail@gmail.com"
              aria-label="Email address"
              required
            />
            <button className="btn btn--cream footer__submit" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

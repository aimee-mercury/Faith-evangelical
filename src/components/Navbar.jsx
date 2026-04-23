import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/Logo.jpeg";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Sermons", href: "/#sermons" },
  { label: "Events", href: "/#events" },
  { label: "Ministries", href: "/#ministries" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav" id="home">
      <div className="container nav__inner">
        <a className="nav__logo" href="/#home" aria-label="Faith Evangelical Church Rwanda">
          <img src={logoSrc} alt="Faith Evangelical Church Rwanda" className="nav__logoImg" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="nav__link" href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--small btn--cream nav__give" href="/#give">
            Give
          </a>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--small btn--cream" href="/#new-here">
            New Here?
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        <div className="container nav__mobileInner">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="nav__mobileLink"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn--cream nav__mobileCta" href="/#give" onClick={() => setOpen(false)}>
            Give
          </a>
          <a className="btn btn--dark nav__mobileCta" href="/#new-here" onClick={() => setOpen(false)}>
            New Here?
          </a>
        </div>
      </div>
    </header>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Sermon", to: "/sermons" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => navItems, []);

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
        <Link className="nav__logo" to="/" aria-label="Faith Evangelical Church">
          Faith Evangelical Church
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {items.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              to={item.to}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--small btn--cream" href="/#contact">
            Contact us
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
          {items.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `nav__mobileLink ${isActive ? "is-active" : ""}`
              }
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="btn btn--cream nav__mobileCta"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
}

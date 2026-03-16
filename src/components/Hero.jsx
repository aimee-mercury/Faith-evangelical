export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="kicker">Welcome to our church</p>
          <h1 className="hero__title">
            Become a part of
            <br />
            our community
          </h1>
          <a className="btn btn--cream hero__cta" href="#about">
            Learn more
          </a>
          <p className="hero__note">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
      </div>
    </section>
  );
}


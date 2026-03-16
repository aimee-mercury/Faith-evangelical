export default function ServeWorld() {
  return (
    <section className="serveWorld" id="contact">
      <div className="serveWorld__bg" aria-hidden="true" />
      <div className="container serveWorld__inner">
        <article className="serveWorld__card">
          <div className="serveWorld__quote" aria-hidden="true">
            {"\u201D"}
          </div>
          <h2 className="serveWorld__title">
            We want to
            <br />
            serve the world
            <br />
            around us
          </h2>
          <p className="serveWorld__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, nisl
            eget.
          </p>
          <a className="btn btn--cream" href="/about">
            Visit
          </a>
        </article>
      </div>
    </section>
  );
}


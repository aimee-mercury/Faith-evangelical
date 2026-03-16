export default function PageHero({ kicker, title, variant = "about" }) {
  return (
    <section className={`pageHero pageHero--${variant}`}>
      <div className="pageHero__bg" aria-hidden="true" />
      <div className="container pageHero__inner">
        <p className="kicker pageHero__kicker">{kicker}</p>
        <h1 className="pageHero__title">{title}</h1>
      </div>
    </section>
  );
}


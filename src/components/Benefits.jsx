import SectionHeading from "./SectionHeading.jsx";

const benefits = [
  { title: "Watch and listen to our sermons", tone: "one" },
  { title: "Watch and listen to our sermons", tone: "two" },
  { title: "Watch and listen to our sermons", tone: "three" },
  { title: "Watch and listen to our sermons", tone: "four" },
];

export default function Benefits() {
  return (
    <section className="section section--sand">
      <div className="container">
        <SectionHeading
          kicker="Watch and listen"
          title="The benefits of joining our church"
          align="center"
        />

        <div className="benefitGrid">
          {benefits.map((b, idx) => (
            <article key={`${b.tone}-${idx}`} className={`benefitCard benefitCard--${b.tone}`}>
              <div className="benefitCard__overlay" />
              <div className="benefitCard__content">
                <p className="benefitCard__kicker">Watch and listen to our sermons</p>
                <h3 className="benefitCard__title">{b.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


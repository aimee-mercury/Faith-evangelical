import SectionHeading from "./SectionHeading.jsx";

const benefits = [
  { kicker: "The Word", title: "Grow in faith through God's Word", tone: "one" },
  { kicker: "Community", title: "Become part of a welcoming community", tone: "two" },
  { kicker: "Service", title: "Serve and make a difference in lives", tone: "three" },
  { kicker: "Worship", title: "Experience the power of Spirit-led worship", tone: "four" },
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
                <p className="benefitCard__kicker">{b.kicker}</p>
                <h3 className="benefitCard__title">{b.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


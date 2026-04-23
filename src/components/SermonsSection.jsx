import SectionHeading from "./SectionHeading.jsx";

const recentSermons = [
  {
    date: "04 MAY",
    series: "May Series",
    title: "100 Random Acts of Kindness",
    speaker: "Bishop Isaac Karamira",
    body: "Join us as we challenge our congregation to spread love through intentional, everyday acts of kindness in our community.",
  },
  {
    date: "11 MAY",
    series: "May Series",
    title: "Faith Is a Process, Not a Destination",
    speaker: "Apostle Jane Karamira",
    body: "A reflective sermon on how our walk with God is a continuous journey of growth, trust, and transformation.",
  },
  {
    date: "18 MAY",
    series: "May Series",
    title: "There Is Nothing Impossible",
    speaker: "Bishop Isaac Karamira",
    body: "Drawing from Scripture, we explore God's power to do the unimaginable in our lives when we surrender to His will.",
  },
];

export default function SermonsSection() {
  return (
    <section className="section section--sand" id="sermons">
      <div className="container">
        <SectionHeading
          kicker="Sermons &amp; messages"
          title="Be fed by the Word of God"
          align="center"
        />

        {/* Featured sermon */}
        <div className="sermonsFeature">
          <div className="sermonsFeature__left">
            <p className="kicker">Latest sermon</p>
            <h3 className="sermonsFeature__title">Rising in His Commandments</h3>
            <p className="sermonsFeature__body">
              An in-depth look at how living according to God's commands brings freedom, purpose,
              and blessing to our everyday lives. Preached on Sunday 25 May 2025 by Bishop Isaac
              Karamira.
            </p>
            <div className="sermonsFeature__meta">
              <span>📅 Sunday, 25 May 2025</span>
              <span>🕐 1st Service: 8:00 AM</span>
            </div>
            <div className="sermonsFeature__actions">
              <a className="btn btn--dark" href="#contact">
                ▶&nbsp;&nbsp;Watch Sermon
              </a>
              <a className="btn btn--outline btn--outline--dark" href="#contact">
                Download Notes
              </a>
            </div>
          </div>
          <div className="sermonsFeature__image" aria-hidden="true" />
        </div>

        {/* Recent sermon cards */}
        <div className="sermonsGrid">
          {recentSermons.map((s) => (
            <article key={s.title} className="sermonMiniCard">
              <p className="sermonMiniCard__date">{s.date}</p>
              <p className="kicker">{s.series}</p>
              <h3 className="sermonMiniCard__title">{s.title}</h3>
              <p className="sermonMiniCard__speaker">{s.speaker}</p>
              <p className="sermonMiniCard__body">{s.body}</p>
              <a className="btn btn--small btn--dark" href="#contact">
                Watch ▶
              </a>
            </article>
          ))}
        </div>

        <div className="viewAll viewAll--center">
          <a className="viewAll__link" href="#contact">
            Request the full sermon archive →
          </a>
        </div>
      </div>
    </section>
  );
}

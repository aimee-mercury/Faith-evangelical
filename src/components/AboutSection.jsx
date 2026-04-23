import SectionHeading from "./SectionHeading.jsx";
import { Link } from "react-router-dom";

const beliefs = [
  {
    title: "The Bible",
    body: "We believe the Holy Bible is the inspired and infallible Word of God — the supreme authority in all matters of faith and conduct.",
  },
  {
    title: "The Trinity",
    body: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit — co-equal and co-eternal.",
  },
  {
    title: "Salvation",
    body: "We believe salvation is by grace through faith in Jesus Christ alone, freely given to all who believe and confess Him as Lord.",
  },
  {
    title: "The Holy Spirit",
    body: "We believe in the present-day work of the Holy Spirit, empowering believers for Christian living, service, and spiritual gifts.",
  },
  {
    title: "The Church",
    body: "We believe in the universal Church — the Body of Christ — made up of all true believers across every nation and generation.",
  },
  {
    title: "The Second Coming",
    body: "We believe in the personal, visible return of Jesus Christ to judge the living and the dead and establish His eternal kingdom.",
  },
];

export default function AboutSection() {
  return (
    <section className="section section--white" id="about">
      <div className="container">
        {/* Welcome */}
        <SectionHeading
          kicker="Welcome to our church"
          title="A family rooted in faith, love &amp; community"
          align="center"
        />
        <p className="sectionLead sectionLead--center">
          Faith Evangelical Church Rwanda is a Spirit-filled, Bible-believing church dedicated
          to transforming lives through the power of God's Word. We are a family committed to
          worshipping God, serving Rwanda, and reaching the nations.
        </p>

        {/* Mission & Vision */}
        <div className="aboutSplit">
          <div className="aboutSplit__col">
            <p className="kicker">Our mission</p>
            <h3 className="aboutSplit__title">Making disciples of all nations</h3>
            <p className="aboutSplit__body">
              Our mission is to preach the Gospel of Jesus Christ, make disciples, and build a
              community of believers who reflect God's kingdom in every area of life — family,
              society, and the marketplace.
            </p>
          </div>
          <div className="aboutSplit__col">
            <p className="kicker">Our vision — Matthew 28:19–20</p>
            <h3 className="aboutSplit__title">Transforming people into the Kingdom of God</h3>
            <p className="aboutSplit__body">
              Through the Word of God, love, and fellowship — we exist to transform people,
              families, communities, and nations into the fullness of God's kingdom. Every life
              changed is a testimony of His grace.
            </p>
          </div>
        </div>

        {/* What We Believe */}
        <SectionHeading kicker="Our beliefs" title="What we stand for" align="center" />
        <div className="beliefsGrid">
          {beliefs.map((b) => (
            <article key={b.title} className="beliefCard">
              <h3 className="beliefCard__title">{b.title}</h3>
              <p className="beliefCard__body">{b.body}</p>
            </article>
          ))}
        </div>

        {/* Leadership */}
        <SectionHeading kicker="Our leadership" title="Meet our pastors" align="center" />
        <div className="leadershipGrid">
          <article className="leaderCard">
            <div className="leaderCard__avatar leaderCard__avatar--1" aria-hidden="true" />
            <h3 className="leaderCard__name">Bishop Isaac Karamira</h3>
            <p className="leaderCard__role">Bishop &amp; Founder</p>
            <p className="leaderCard__bio">
              Bishop Isaac Karamira is the founding lead pastor of Faith Evangelical Church
              Rwanda. With a heart for God and his nation, he has dedicated his life to raising
              disciples, restoring families, and advancing the Kingdom of God across Rwanda and
              beyond.
            </p>
            <a className="leaderCard__phone" href="tel:+250788852050">
              +250 788 852 050
            </a>
          </article>

          <article className="leaderCard">
            <div className="leaderCard__avatar leaderCard__avatar--2" aria-hidden="true" />
            <h3 className="leaderCard__name">Apostle Jane Karamira</h3>
            <p className="leaderCard__role">Apostle &amp; Co-Leader</p>
            <p className="leaderCard__bio">
              Apostle Jane Karamira ministers with prophetic authority and deep compassion for
              God's people. She leads the women's ministry and oversees prayer and intercession,
              believing in the transforming power of the Holy Spirit in every believer's life.
            </p>
            <a className="leaderCard__phone" href="tel:+250788877912">
              +250 788 877 912
            </a>
          </article>
        </div>

        {/* Gallery link */}
        <div className="center" style={{ marginTop: "48px" }}>
          <Link className="btn btn--dark" to="/gallery">
            View Photo Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}

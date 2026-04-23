import SectionHeading from "./SectionHeading.jsx";

const ministries = [
  {
    icon: "🌟",
    name: "Youth Ministry",
    leader: "Contact Bishop Isaac",
    phone: "+250 788 852 050",
    description:
      "Empowering young people to discover their God-given purpose through worship, discipleship, Bible study, and mentorship.",
    schedule: "Friday 6:00 PM & Saturday 8:00 AM",
  },
  {
    icon: "🌸",
    name: "Women's Ministry",
    leader: "Apostle Jane Karamira",
    phone: "+250 788 877 912",
    description:
      "A community of women growing in faith, supporting one another, and advancing God's kingdom in their homes and society.",
    schedule: "Saturday 8:00 AM",
  },
  {
    icon: "⚡",
    name: "Men's Ministry",
    leader: "Contact Bishop Isaac",
    phone: "+250 788 852 050",
    description:
      "Raising godly men who lead their families, communities, and workplaces with integrity, wisdom, and faith.",
    schedule: "Saturday 7:00 AM",
  },
  {
    icon: "🧒",
    name: "Children's Ministry",
    leader: "Contact the Church Office",
    phone: "+250 788 852 050",
    description:
      "A safe, fun, and faith-filled environment where children ages 3–12 learn about God's love and the Bible every Sunday.",
    schedule: "Sunday 8:00 AM – 12:30 PM",
  },
  {
    icon: "🎵",
    name: "Worship Ministry",
    leader: "Contact the Church Office",
    phone: "+250 788 852 050",
    description:
      "Leading the congregation into God's presence through anointed music, worship, and creative arts every week.",
    schedule: "Rehearsal: Friday 5:00 PM",
  },
  {
    icon: "🌍",
    name: "Outreach & Evangelism",
    leader: "Contact Bishop Isaac",
    phone: "+250 788 852 050",
    description:
      "Taking the Gospel beyond our walls into Kigali, Rwanda, and the nations — through community service and evangelism.",
    schedule: "Last Saturday of every month",
  },
];

export default function MinistriesSection() {
  return (
    <section className="section section--sand" id="ministries">
      <div className="container">
        <SectionHeading kicker="Get involved" title="Our ministries" align="center" />
        <p className="sectionLead sectionLead--center">
          There is a place for you here. Explore our ministry departments and find where God
          is calling you to serve, grow, and make a difference.
        </p>

        <div className="ministriesGrid">
          {ministries.map((m) => (
            <article key={m.name} className="ministryCard">
              <span className="ministryCard__icon" aria-hidden="true">{m.icon}</span>
              <h3 className="ministryCard__name">{m.name}</h3>
              <p className="ministryCard__leader">
                {m.leader}
                {" — "}
                <a href={`tel:${m.phone.replace(/\s/g, "")}`}>{m.phone}</a>
              </p>
              <p className="ministryCard__desc">{m.description}</p>
              <p className="ministryCard__schedule">📅 {m.schedule}</p>
              <a className="btn btn--small btn--dark" href="#contact">
                Join this ministry
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

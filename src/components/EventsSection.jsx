import SectionHeading from "./SectionHeading.jsx";

const upcoming = [
  {
    dateDay: "04",
    dateMonth: "MAY",
    title: "100 Random Acts of Kindness",
    time: "Sunday 9:00 AM",
    location: "Main Sanctuary, Kigali",
    open: true,
    body: "Sermon series launch and community challenge. Bring a friend and come expectant!",
  },
  {
    dateDay: "10",
    dateMonth: "MAY",
    title: "Women's Conference",
    time: "Saturday 8:00 AM",
    location: "Main Sanctuary, Kigali",
    open: true,
    body: "A full-day conference for women to be refreshed, equipped, and empowered in faith and life.",
  },
  {
    dateDay: "17",
    dateMonth: "MAY",
    title: "Youth Night",
    time: "Friday 6:00 PM",
    location: "Youth Hall, Kigali",
    open: true,
    body: "An evening of worship, games, and the Word for youth and young adults. All welcome!",
  },
  {
    dateDay: "24",
    dateMonth: "MAY",
    title: "Community Outreach Day",
    time: "Saturday 9:00 AM",
    location: "Kigali Neighbourhoods",
    open: true,
    body: "Join our outreach team as we go into the community with food, prayer, and the Gospel.",
  },
];

const recurring = [
  { day: "Mon – Sat", time: "6:00 – 7:00 AM", name: "Morning Glory", icon: "🌅" },
  { day: "Sunday", time: "8:00–10:00 AM & 10:00 AM–12:30 PM", name: "Sunday Service", icon: "🙏" },
  { day: "Wednesday", time: "5:00 PM – 8:00 PM", name: "Wednesday Service", icon: "🕯️" },
  { day: "Friday", time: "Praise & Worship 5:00 – 8:00 PM", name: "Friday Service", icon: "🎵" },
  { day: "Saturday", time: "8:00 AM", name: "Youth & Young Adults", icon: "🌟" },
];

export default function EventsSection() {
  return (
    <section className="section section--white" id="events">
      <div className="container">
        <SectionHeading kicker="What's coming up" title="Upcoming events" align="center" />

        <div className="eventsGrid">
          {upcoming.map((e) => (
            <article key={e.title} className="eventCard eventCard--compact">
              <div className="eventCard__date">
                <span className="eventCard__day">{e.dateDay}</span>
                <span className="eventCard__month">{e.dateMonth}</span>
              </div>
              <p className="eventCard__kicker">{e.open ? "Open to all" : "Members only"}</p>
              <h3 className="eventCard__title">{e.title}</h3>
              <p className="eventCard__body">{e.body}</p>
              <ul className="eventCard__meta">
                <li>🕐 {e.time}</li>
                <li>📍 {e.location}</li>
              </ul>
              <a className="btn btn--small btn--dark" href="#contact">
                RSVP
              </a>
            </article>
          ))}
        </div>

        {/* Recurring weekly programs */}
        <SectionHeading kicker="Every week" title="Regular programmes" align="center" />
        <div className="programsGrid">
          {recurring.map((r) => (
            <article key={r.name} className="programCard">
              <span className="programCard__icon" aria-hidden="true">{r.icon}</span>
              <h3 className="programCard__name">{r.name}</h3>
              <p className="programCard__day">{r.day}</p>
              <p className="programCard__time">{r.time}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

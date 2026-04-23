import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SermonEventCard from "../components/SermonEventCard.jsx";

const events = [
  {
    title: "100 Random Acts of Kindness",
    body: "Join us as we challenge our congregation to spread love through intentional, everyday acts of kindness in our community.",
    dateDay: "04",
    dateMonth: "MAY",
    time: "Sunday 1st: 8:00 – 10:00 AM",
    time2: "Sunday 2nd: 10:00 AM – 12:30 PM",
    location: "Main Sanctuary, Faith Evangelical Church Rwanda, Kigali",
  },
  {
    title: "Faith Is a Process, Not a Destination",
    body: "A reflective sermon on how our walk with God is a continuous journey of growth, trust, and transformation.",
    dateDay: "11",
    dateMonth: "MAY",
    time: "Sunday 1st: 8:00 – 10:00 AM",
    time2: "Sunday 2nd: 10:00 AM – 12:30 PM",
    location: "Main Sanctuary, Faith Evangelical Church Rwanda, Kigali",
  },
  {
    title: "There Is Nothing Impossible",
    body: "Drawing from Scripture, we explore God's power to do the unimaginable in our lives when we surrender to His will.",
    dateDay: "18",
    dateMonth: "MAY",
    time: "Sunday 1st: 8:00 – 10:00 AM",
    time2: "Sunday 2nd: 10:00 AM – 12:30 PM",
    location: "Main Sanctuary, Faith Evangelical Church Rwanda, Kigali",
  },
  {
    title: "Rising in His Commandments",
    body: "An in-depth look at how living according to God's commands brings freedom, purpose, and blessing to our everyday lives.",
    dateDay: "25",
    dateMonth: "MAY",
    time: "Sunday 1st: 8:00 – 10:00 AM",
    time2: "Sunday 2nd: 10:00 AM – 12:30 PM",
    location: "Main Sanctuary, Faith Evangelical Church Rwanda, Kigali",
  },
];

export default function SermonsPage() {
  return (
    <>
      <PageHero kicker="Sermons" title="Take part in our sermons" variant="sermons" />

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            kicker="Upcoming sermons"
            title={
              <>
                Join us and become part
                <br />
                of something great
              </>
            }
            align="center"
          />

          <div className="sermonsFeature">
            <div className="sermonsFeature__left">
              <SermonEventCard
                dateDay="04"
                dateMonth="MAY"
                title="100 Random Acts of Kindness"
                body="Join us as we challenge our congregation to spread love through intentional, everyday acts of kindness in our community. This Sunday's sermon sets the theme for our May outreach initiative."
                time="Sunday 1st: 8:00 – 10:00 AM"
                time2="Sunday 2nd: 10:00 AM – 12:30 PM"
                location="Main Sanctuary, Faith Evangelical Church Rwanda, Kigali"
              />
            </div>
            <div className="sermonsFeature__image" aria-hidden="true" />
          </div>

          <div className="viewAll viewAll--center">
            <a className="viewAll__link" href="#events">
              View all sermons {"\u2192"}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--white" id="events">
        <div className="container">
          <h2 className="eventsTitle">View all events</h2>

          <div className="eventsGrid">
            {events.map((e, idx) => (
              <SermonEventCard
                key={`${e.title}-${idx}`}
                title={e.title}
                compact
                body={e.body}
                dateDay={e.dateDay}
                dateMonth={e.dateMonth}
                time={e.time}
                time2={e.time2}
                location={e.location}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SermonEventCard from "../components/SermonEventCard.jsx";

const events = [
  { title: "100 random acts of kindness" },
  { title: "Faith is a process, not a destination" },
  { title: "There is nothing impossible" },
  { title: "Watch and listen to our sermons" },
];

export default function SermonsPage() {
  return (
    <>
      <PageHero kicker="Sermon" title="Take part in our sermon" variant="sermons" />

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
              <SermonEventCard />
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
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


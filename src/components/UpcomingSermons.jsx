import SectionHeading from "./SectionHeading.jsx";
import MetaIcon from "./MetaIcon.jsx";

export default function UpcomingSermons() {
  return (
    <section className="section section--white" id="sermons">
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

        <div className="sermonRow">
          <article className="sermonCard" aria-label="Upcoming sermon">
            <div className="sermonCard__date">
              <span className="sermonCard__day">20</span>
              <span className="sermonCard__month">JUL</span>
            </div>

            <p className="sermonCard__kicker">Upcoming event</p>
            <h3 className="sermonCard__title">
              Watch and listen
              <br />
              to our sermons
            </h3>
            <p className="sermonCard__body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

            <ul className="sermonCard__meta">
              <li>
                <span className="metaIcon" aria-hidden="true">
                  <MetaIcon name="time" />
                </span>
                Friday 23:39 IST
              </li>
              <li>
                <span className="metaIcon" aria-hidden="true">
                  <MetaIcon name="pin" />
                </span>
                No 233 Main St. New York
              </li>
            </ul>

            <a className="btn btn--dark sermonCard__cta" href="/#contact">
              Register
            </a>
          </article>

          <div className="sermonImage" aria-hidden="true" />
        </div>

        <div className="viewAll">
          <a className="viewAll__link" href="/sermons">
            View all sermons {"\u2192"}
          </a>
        </div>
      </div>
    </section>
  );
}


import MetaIcon from "./MetaIcon.jsx";

export default function SermonEventCard({
  dateDay = "20",
  dateMonth = "JULY",
  title = "Watch and listen to our sermons",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  time = "Friday 23:39 IST",
  time2 = "Saturday 11:20 ISD",
  location = "No 233 Main St. New York, United States",
  compact = false,
}) {
  return (
    <article className={`eventCard ${compact ? "eventCard--compact" : ""}`}>
      <div className="eventCard__date">
        <span className="eventCard__day">{dateDay}</span>
        <span className="eventCard__month">{dateMonth}</span>
      </div>

      <p className="eventCard__kicker">Upcoming event</p>
      <h3 className="eventCard__title">{title}</h3>
      <p className="eventCard__body">{body}</p>

      <ul className="eventCard__meta">
        <li>
          <span className="metaIcon" aria-hidden="true">
            <MetaIcon name="time" />
          </span>
          <span>
            {time}
            <br />
            {time2}
          </span>
        </li>
        <li>
          <span className="metaIcon" aria-hidden="true">
            <MetaIcon name="pin" />
          </span>
          <span>{location}</span>
        </li>
      </ul>

      {!compact ? (
        <a className="btn btn--dark eventCard__cta" href="/#contact">
          Register
        </a>
      ) : null}
    </article>
  );
}


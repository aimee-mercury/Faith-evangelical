export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="kicker">Welcome to Faith Evangelical Church Rwanda</p>
          <h1 className="hero__title">
            Rise and put into
            <br />
            His commandments
          </h1>
          <p className="hero__note">
            Led by Bishop Isaac Karamira and Apostle Jane Karamira — a church built on
            faith, love, and service in the heart of Rwanda.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--cream" href="#new-here">
              Plan Your Visit
            </a>
            <a className="btn btn--outline" href="#sermons">
              Watch Latest Sermon
            </a>
          </div>

          <div className="serviceTimes" aria-label="Service schedule">
            <div className="serviceTime">
              <span className="serviceTime__day">Mon – Sat</span>
              <span className="serviceTime__hours">Morning Glory: 6:00 – 7:00 AM</span>
            </div>
            <div className="serviceTime__divider" aria-hidden="true" />
            <div className="serviceTime">
              <span className="serviceTime__day">Sunday</span>
              <span className="serviceTime__hours">1st: 8:00 – 10:00 AM</span>
              <span className="serviceTime__hours">2nd: 10:00 AM – 12:30 PM</span>
            </div>
            <div className="serviceTime__divider" aria-hidden="true" />
            <div className="serviceTime">
              <span className="serviceTime__day">Wednesday</span>
              <span className="serviceTime__hours">5:00 PM – 8:00 PM</span>
            </div>
            <div className="serviceTime__divider" aria-hidden="true" />
            <div className="serviceTime">
              <span className="serviceTime__day">Friday</span>
              <span className="serviceTime__hours">Praise &amp; Worship 5:00 – 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

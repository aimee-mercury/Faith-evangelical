import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

export default function PrayerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [privacy, setPrivacy] = useState("team");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section section--white" id="prayer">
      <div className="container">
        <SectionHeading
          kicker="We stand with you"
          title="Submit a prayer request"
          align="center"
        />
        <p className="sectionLead sectionLead--center">
          We believe in the power of prayer. Share your request and our prayer team will
          intercede on your behalf — in faith, in confidence, and in love.
        </p>

        <div className="prayerFormWrap">
          {submitted ? (
            <div className="formSuccess">
              <span aria-hidden="true">🙏</span>
              <p>
                Your prayer request has been received. Our prayer team is standing with
                you in faith. God hears every prayer — be encouraged!
              </p>
            </div>
          ) : (
            <form className="prayerForm" onSubmit={handleSubmit} noValidate>
              <div className="prayerForm__row">
                <input
                  className="formInput"
                  type="text"
                  placeholder="Your name (optional)"
                  aria-label="Your name"
                />
                <input
                  className="formInput"
                  type="email"
                  placeholder="Your email (optional)"
                  aria-label="Your email"
                />
              </div>

              <textarea
                className="formInput formInput--textarea"
                placeholder="Share your prayer request here..."
                rows={5}
                required
                aria-label="Prayer request"
              />

              <fieldset className="prayerForm__privacy">
                <legend className="prayerForm__privacyLabel">Privacy preference:</legend>
                <label className="radioLabel">
                  <input
                    type="radio"
                    name="privacy"
                    value="team"
                    checked={privacy === "team"}
                    onChange={() => setPrivacy("team")}
                  />
                  Keep private — share only with our prayer team
                </label>
                <label className="radioLabel">
                  <input
                    type="radio"
                    name="privacy"
                    value="wall"
                    checked={privacy === "wall"}
                    onChange={() => setPrivacy("wall")}
                  />
                  Share on our community prayer wall (anonymously)
                </label>
              </fieldset>

              <button className="btn btn--cream" type="submit">
                Submit Prayer Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

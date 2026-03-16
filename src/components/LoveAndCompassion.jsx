import SectionHeading from "./SectionHeading.jsx";

export default function LoveAndCompassion() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading
          kicker="Sub-headline"
          title="Love and compassion"
          align="center"
        />

        <p className="sectionLead sectionLead--center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div className="center">
          <a className="btn btn--cream" href="#sermons">
            Read more
          </a>
        </div>

        <div className="photoCollage" aria-label="Prayer and community photos">
          <div className="photoCollage__img photoCollage__img--left" />
          <div className="photoCollage__img photoCollage__img--center" />
          <div className="photoCollage__img photoCollage__img--right" />
        </div>

        <div className="celebrate">
          <p className="kicker centerText">Sub-headline</p>
          <h2 className="h2 centerText">Celebrate with us</h2>
          <p className="celebrate__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}


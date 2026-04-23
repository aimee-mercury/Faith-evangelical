import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Icon from "../components/Icon.jsx";

const team = [
  { name: "Bishop Isaac Karamira", role: "Lead Pastor, Faith Evangelical Church Rwanda" },
  { name: "Apostle Jane Karamira", role: "Apostle, Faith Evangelical Church Rwanda" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About us" title="Serving the world around us" variant="about" />

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            kicker="Welcome to our church"
            title="Love and compassion"
            align="center"
          />

          <p className="sectionLead sectionLead--center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="photoCollage photoCollage--about" aria-label="Love and compassion photos">
            <div className="photoCollage__img photoCollage__img--left" />
            <div className="photoCollage__img photoCollage__img--center" />
            <div className="photoCollage__img photoCollage__img--right" />
          </div>

          <div className="aboutSplit">
            <div className="aboutSplit__col">
              <p className="kicker">Our mission & vision</p>
              <h3 className="aboutSplit__title">Striving for a better tomorrow</h3>
              <p className="aboutSplit__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="aboutSplit__col">
              <p className="kicker">What we do</p>
              <h3 className="aboutSplit__title">Bringing peace and joy to the world</h3>
              <p className="aboutSplit__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            kicker="Benefits"
            title="The benefits of joining our church"
            align="center"
          />

          <div className="benefitRows">
            <article className="benefitRow">
              <div className="benefitRow__text">
                <h3 className="benefitRow__title">Find fulfillment and joy</h3>
                <p className="benefitRow__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="benefitRow__image benefitRow__image--one" aria-hidden="true" />
            </article>

            <article className="benefitRow benefitRow--reverse">
              <div className="benefitRow__text">
                <h3 className="benefitRow__title">Shared values</h3>
                <p className="benefitRow__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="benefitRow__image benefitRow__image--two" aria-hidden="true" />
            </article>

            <article className="benefitRow">
              <div className="benefitRow__text">
                <h3 className="benefitRow__title">Charity events</h3>
                <p className="benefitRow__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="benefitRow__image benefitRow__image--three" aria-hidden="true" />
            </article>

            <article className="benefitRow benefitRow--reverse">
              <div className="benefitRow__text">
                <h3 className="benefitRow__title">All are welcome</h3>
                <p className="benefitRow__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="benefitRow__image benefitRow__image--four" aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <SectionHeading
            kicker="Church members"
            title="Meet our inspirational team"
            align="center"
          />

          <div className="teamGrid" role="list">
            {team.map((m, idx) => (
              <article key={`${m.name}-${idx}`} className="teamCard" role="listitem">
                <div className={`teamCard__avatar teamCard__avatar--${idx + 1}`} aria-hidden="true" />
                <h3 className="teamCard__name">{m.name}</h3>
                <p className="teamCard__role">{m.role}</p>
                <div className="teamCard__social">
                  <a className="teamSocial" href="#" aria-label="Facebook">
                    <Icon name="facebook" />
                  </a>
                  <a className="teamSocial" href="#" aria-label="Twitter">
                    <Icon name="twitter" />
                  </a>
                  <a className="teamSocial" href="#" aria-label="LinkedIn">
                    <Icon name="linkedin" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


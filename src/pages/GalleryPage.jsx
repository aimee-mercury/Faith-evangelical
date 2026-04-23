import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";

const photos = [
  {
    alt: "Sunday worship service — congregation gathered in praise",
    url: "https://source.unsplash.com/ZgfxMiwaePM/800x600",
  },
  {
    alt: "Cross inside the sanctuary with warm light",
    url: "https://source.unsplash.com/D6a2yZt-jwo/800x600",
  },
  {
    alt: "Congregation worshiping with raised hands",
    url: "https://source.unsplash.com/FkVaaDKKCUc/800x600",
  },
  {
    alt: "Bible study and devotion session",
    url: "https://source.unsplash.com/ptYZgQ5XC7M/800x600",
  },
  {
    alt: "Community gathering and fellowship",
    url: "https://source.unsplash.com/ZgfxMiwaePM/801x600",
  },
  {
    alt: "Youth ministry event — young people in worship",
    url: "https://source.unsplash.com/FkVaaDKKCUc/801x600",
  },
  {
    alt: "Children's ministry — kids learning about God's love",
    url: "https://source.unsplash.com/D6a2yZt-jwo/801x600",
  },
  {
    alt: "Community outreach and service in Kigali",
    url: "https://source.unsplash.com/ptYZgQ5XC7M/801x600",
  },
  {
    alt: "Prayer and intercession session",
    url: "https://source.unsplash.com/ZgfxMiwaePM/802x600",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pageHero pageHero--gallery">
        <div className="pageHero__bg" aria-hidden="true" />
        <div className="container pageHero__inner">
          <p className="kicker pageHero__kicker">Our Community</p>
          <h1 className="pageHero__title">Photo Gallery</h1>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            kicker="Moments of faith"
            title="Life at Faith Evangelical Church Rwanda"
            align="center"
          />

          <div className="galleryGrid">
            {photos.map((p, idx) => (
              <figure key={idx} className="galleryItem">
                <img
                  className="galleryItem__img"
                  src={p.url}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
                <figcaption className="galleryItem__caption">{p.alt}</figcaption>
              </figure>
            ))}
          </div>

          <div className="center" style={{ marginTop: "48px" }}>
            <Link className="btn btn--dark" to="/">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import SectionHeading from "./SectionHeading.jsx";

const posts = [
  {
    title: "Watch and listen to our sermons",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
    imageUrl: "https://source.unsplash.com/ZgfxMiwaePM/1200x800",
    imageAlt: "Community gathered in worship during a church service",
  },
  {
    title: "Watch and listen to our sermons",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
    imageUrl: "https://source.unsplash.com/D6a2yZt-jwo/1200x800",
    imageAlt: "Cross inside a church with warm light",
  },
  {
    title: "Watch and listen to our sermons",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
    imageUrl: "https://source.unsplash.com/FkVaaDKKCUc/1200x800",
    imageAlt: "Congregation worshiping with raised hands",
  },
  {
    title: "Watch and listen to our sermons",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021",
    imageUrl: "https://source.unsplash.com/ptYZgQ5XC7M/1200x800",
    imageAlt: "Person reading the Bible during a study session",
  },
];

export default function Blog() {
  return (
    <section className="section section--white" id="blog">
      <div className="container">
        <SectionHeading
          kicker="Read our blog"
          title="Share, inspire, innovate"
          align="center"
        />

        <div className="blogGrid">
          {posts.map((p, idx) => (
            <article key={`${p.title}-${idx}`} className="blogCard">
              <div className="blogCard__media">
                <img
                  className="blogCard__img"
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="blogCard__content">
                <p className="blogCard__kicker">Relationship</p>
                <h3 className="blogCard__title">{p.title}</h3>
                <p className="blogCard__body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </p>
                <p className="blogCard__meta">{p.author}</p>
                <p className="blogCard__meta">{p.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

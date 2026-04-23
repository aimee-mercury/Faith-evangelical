import SectionHeading from "./SectionHeading.jsx";

const posts = [
  {
    title: "Finding Peace in Times of Uncertainty",
    body: "In a world full of uncertainty, God's word remains our anchor. Discover how faith sustains us through life's greatest storms.",
    category: "Faith",
    author: "By Pastor James Mwangi",
    date: "Monday 14 April, 2025",
    imageUrl: "https://source.unsplash.com/ZgfxMiwaePM/1200x800",
    imageAlt: "Community gathered in worship during a church service",
  },
  {
    title: "The Power of Community in Faith",
    body: "We were never meant to walk alone. Explore why Christian community is central to a vibrant and growing faith life.",
    category: "Community",
    author: "By Elder Sarah Kimani",
    date: "Wednesday 2 April, 2025",
    imageUrl: "https://source.unsplash.com/D6a2yZt-jwo/1200x800",
    imageAlt: "Cross inside a church with warm light",
  },
  {
    title: "Walking in God's Purpose Daily",
    body: "Purpose is not found in achievements alone. Learn how to align your daily walk with the calling God has placed on your life.",
    category: "Purpose",
    author: "By Pastor James Mwangi",
    date: "Thursday 20 March, 2025",
    imageUrl: "https://source.unsplash.com/FkVaaDKKCUc/1200x800",
    imageAlt: "Congregation worshiping with raised hands",
  },
  {
    title: "Grace, Forgiveness, and New Beginnings",
    body: "God's grace is greater than any mistake. This reflection unpacks the transforming power of forgiveness and how to embrace a fresh start.",
    category: "Grace",
    author: "By Deacon Peter Osei",
    date: "Monday 3 March, 2025",
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
                <p className="blogCard__kicker">{p.category}</p>
                <h3 className="blogCard__title">{p.title}</h3>
                <p className="blogCard__body">{p.body}</p>
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

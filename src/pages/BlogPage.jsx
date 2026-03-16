import SectionHeading from "../components/SectionHeading.jsx";
import Blog from "../components/Blog.jsx";

export default function BlogPage() {
  return (
    <>
      <section className="pageHero pageHero--blog">
        <div className="pageHero__bg" aria-hidden="true" />
        <div className="container pageHero__inner">
          <p className="kicker pageHero__kicker">Blog</p>
          <h1 className="pageHero__title">Read our latest posts</h1>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeading kicker="Read our blog" title="Share, inspire, innovate" align="center" />
        </div>
      </section>

      <Blog />
    </>
  );
}


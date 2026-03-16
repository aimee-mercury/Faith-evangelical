import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

const cards = [
  {
    title: "About us",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo.",
    icon: "hands",
  },
  {
    title: "Get involved",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo.",
    icon: "community",
  },
  {
    title: "Giving back",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo.",
    icon: "heart",
  },
];

export default function Features() {
  return (
    <section className="section section--white" id="about">
      <div className="container">
        <SectionHeading
          kicker="Sub-headline"
          title="A church that's relevant"
          align="center"
        />

        <div className="featureGrid">
          {cards.map((c) => (
            <article key={c.title} className="featureCard">
              <div className="featureCard__icon">
                <Icon name={c.icon} />
              </div>
              <h3 className="featureCard__title">{c.title}</h3>
              <p className="featureCard__body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


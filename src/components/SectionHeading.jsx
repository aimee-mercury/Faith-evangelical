export default function SectionHeading({ kicker, title, align = "left" }) {
  return (
    <div className={`sectionHeading sectionHeading--${align}`}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="h2">{title}</h2>
    </div>
  );
}


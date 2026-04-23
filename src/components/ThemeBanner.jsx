import themeImg from "../../assets/church theme.jpeg";

export default function ThemeBanner() {
  return (
    <section className="themeBanner" aria-label="2026 Church Theme">
      <img
        src={themeImg}
        alt="2026 Theme: The Church Must Be On Top — Isaiah 2:2 | Bishop Isaac & Ap. Jane Karamira | Rise and Put in Action Ministry"
        className="themeBanner__img"
      />
    </section>
  );
}

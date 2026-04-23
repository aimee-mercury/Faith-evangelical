import Hero from "../components/Hero.jsx";
import ThemeBanner from "../components/ThemeBanner.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SermonsSection from "../components/SermonsSection.jsx";
import EventsSection from "../components/EventsSection.jsx";
import MinistriesSection from "../components/MinistriesSection.jsx";
import GiveSection from "../components/GiveSection.jsx";
import NewHereSection from "../components/NewHereSection.jsx";
import PrayerSection from "../components/PrayerSection.jsx";
import Blog from "../components/Blog.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThemeBanner />
      <AboutSection />
      <SermonsSection />
      <EventsSection />
      <MinistriesSection />
      <GiveSection />
      <NewHereSection />
      <PrayerSection />
      <Blog />
      <ContactSection />
    </>
  );
}

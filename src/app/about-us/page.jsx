import AboutHeroSection from "../components/AboutHeroSection";
import AboutSectionSecondary from "../components/AboutSectionSecondary";
import Footer from "../components/Footer";
import GetInTouchSection from "../components/GetInTouchSection";
import OurMissionSection from "../components/OurMissionSection";
import OurTeamSection from "../components/OurTeamSection";

export default function page() {
  return (
    <>
      <AboutHeroSection />
      <AboutSectionSecondary />
      <OurMissionSection />
      <OurTeamSection />
      <GetInTouchSection />
      <Footer />
    </>
  );
}

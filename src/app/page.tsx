import Main from "@/components/Main";
import Section from "@/components/ProyectsSection";
import AboutMeSection from "@/components/AboutMeSection";
import TechnologiesSection from "@/components/TecnologiesSection";

export default function Home() {


  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      <Main />
      <Section />
      <AboutMeSection />
      <TechnologiesSection />
    </div>
  );
}

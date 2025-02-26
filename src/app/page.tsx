import Main from "@/components/Main";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-black text-white px-8">
    
        <Main />
        <Section />
      </div>
      <Footer />
    </>
  );
}

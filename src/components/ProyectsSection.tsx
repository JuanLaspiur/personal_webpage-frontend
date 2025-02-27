import { Card } from "./cards/Card";
import SectionTiles from "./titles/SectionTiles";

export default function Section() {
  return (
    <section className="w-full flex flex-col items-center mt-16 py-6">
      <SectionTiles text='Uptime Monitoring' imageSrc='/logo_sin-fondo-ni-titulo.png' />
      <div className="mt-6 rounded-2xl py-6 shadow-lg w-full mx-auto">
        <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
          <Card
            title="Cooperativa Cultural"
            description="React native/Java"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Cooperativa Cultural"
            footerText="Cooperativa Cultural"
            videoSrc="./proyecto.mp4"
          />
          <Card
            title="Spartus Web Page"
            description="React.js/Node"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Spartus Web Page"
            footerText="Spartus Web Page"
             videoSrc="./spartus.mp4"
          />
          <Card
            title="Tag List"
            description="Next.js/Node"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Latency Monitoring"
            footerText="Tag List"
            videoSrc="./tag_list.mp4"
          />
          <Card
            title="Blog María"
            description="React"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Blog María"
            footerText="Blog María"
            videoSrc="./Blog_maria.mp4"
          />
               <Card
            title="Red Social"
            description="React/Java/Spring"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Red Social"
            footerText="Red Social"
            videoSrc="./Red_social.mp4"
          />
        </div>
      </div>
    </section>
  );
}

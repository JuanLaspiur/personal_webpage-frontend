import { Card } from "./cards/Card";
import SectionTiles from "./titles/SectionTiles";

const projects = [
  {
    title: "Cooperativa Cultural",
    description: "React Native/Java",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Cooperativa Cultural",
    footerText: "Cooperativa Cultural",
    videoSrc: "./proyects/proyecto.mp4",
  },
  {
    title: "Spartus Web Page",
    description: "React.js/Node",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Spartus Web Page",
    footerText: "Spartus Web Page",
    videoSrc: "./proyects/spartus.mp4",
  },
  {
    title: "Tag List",
    description: "Next.js/Node",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Tag List",
    footerText: "Tag List",
    videoSrc: "./proyects/tag_list.mp4",
  },
  {
    title: "Blog María",
    description: "React",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Blog María",
    footerText: "Blog María",
    videoSrc: "./proyects/Blog_maria.mp4",
  },
  {
    title: "Red Social",
    description: "React/Java/Spring",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Red Social",
    footerText: "Red Social",
    videoSrc: "./proyects/Red_social.mp4",
  },
];

export default function Section() {
  return (
    <section className="w-full flex flex-col items-center mt-16 py-6">
      <SectionTiles text="Uptime Monitoring" imageSrc="/logo_sin-fondo-ni-titulo.png" />
      <div className="mt-6 rounded-2xl py-6 shadow-lg w-full mx-auto">
        <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}


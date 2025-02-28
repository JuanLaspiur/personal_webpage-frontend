import { Card } from "./cards/Card";
import SectionTiles from "./titles/SectionTiles";
import { FaUsers, FaGlobe, FaListAlt, FaPenFancy, FaNetworkWired } from "react-icons/fa";
import ScrollToTopButton from "./buttons/ScrollToTopButton"; // Importar el componente

const projects = [
  {
    title: "Cooperativa Cultural",
    description: "React Native/Java",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Cooperativa Cultural",
    footerText: "Cooperativa Cultural",
    videoSrc: "./proyects/proyecto.mp4",
    icon: <FaUsers className="text-white text-2xl" />,
  },
  {
    title: "Spartus Web Page",
    description: "React.js/Node",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Spartus Web Page",
    footerText: "Spartus Web Page",
    videoSrc: "./proyects/spartus.mp4",
    icon: <FaGlobe className="text-white text-2xl" />,
  },
  {
    title: "Tag List",
    description: "Next.js/Node",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Tag List",
    footerText: "Tag List",
    videoSrc: "./proyects/tag_list.mp4",
    icon: <FaListAlt className="text-white text-2xl" />,
  },
  {
    title: "Blog María",
    description: "React",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Blog María",
    footerText: "Blog María",
    videoSrc: "./proyects/Blog_maria.mp4",
    icon: <FaPenFancy className="text-white text-2xl" />,
  },
  {
    title: "Red Social",
    description: "React/Java/Spring",
    imageSrc: "/logo_sin-fondo.png",
    imageAlt: "Red Social",
    footerText: "Red Social",
    videoSrc: "./proyects/red_social.mp4",
    icon: <FaNetworkWired className="text-white text-2xl" />,
  },
];

export default function Section({ projectsData = projects }) {
  return (
    <section className="w-full flex flex-col items-center mt-16 py-6 relative">
      <SectionTiles text="Uptime Monitoring" imageSrc="/iconos/espada.png" />
      <div className="mt-6 rounded-2xl py-6 shadow-lg w-full mx-auto">
        <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Aquí se importa y usa el componente ScrollToTopButton */}
      <ScrollToTopButton />
    </section>
  );
}

import Image from 'next/image';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb } from 'react-icons/si';
import SectionTiles from './titles/SectionTiles';
import Button from './buttons/Button';

export default function AboutMeSection() {
  return (
    <section className="w-full flex flex-col items-center mt-16 py-10 text-white ">
      <SectionTiles text='About Me' imageSrc='/logo_sin-fondo-ni-titulo.png'/>
      
      <div className="backdrop-blur-lg rounded-2xl p-10 shadow-2xl max-w-4xl w-full flex flex-col items-center text-center">
        
        <div className="relative w-48 h-48">
          <Image 
            src="/yo.png" 
            alt="Andrés Felipe Ramírez Galeano" 
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Descripción */}
        <p className="mt-6 text-lg max-w-lg leading-relaxed text-gray-300">
          Hi, I'm <span className="font-semibold text-cyan-300">Juan Laspiur</span>, a passionate software developer specializing in front-end and back-end technologies. I love building high-performance applications using modern tools like React, React Native, Node.js, and Next.js.
        </p>

        {/* Tech Stack con animaciones */}
        <div className="flex gap-8 my-6">
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <FaReact className="text-blue-400 text-5xl drop-shadow-lg" />
            <span className="mt-2 text-sm text-gray-300">React</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <FaNodeJs className="text-green-400 text-5xl drop-shadow-lg" />
            <span className="mt-2 text-sm text-gray-300">Node.js</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <SiNextdotjs className="text-white text-5xl drop-shadow-lg" /> {/* Ícono de Next.js */}
            <span className="mt-2 text-sm text-gray-300">Next.js</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <SiMongodb className="text-green-500 text-5xl drop-shadow-lg" /> {/* Ícono de MongoDB */}
            <span className="mt-2 text-sm text-gray-300">MongoDB</span>
          </div>
        </div>
        <Button text="Linkedin"/>
      </div>
    </section>
  );
}

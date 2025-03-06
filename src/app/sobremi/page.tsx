import Button from '@/components/buttons/Button';
import MainTitles from '@/components/titles/MainTitles';
import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs } from 'react-icons/si';

function Page() {
  return (
    <div className="h-auto w-screen flex flex-col items-center z-[9999] text-white relative left-0">
      <div className="text-center max-w-2xl">
        <MainTitles topText="About me" bottomText="Juan Laspiur" />
      </div>
    <div className="backdrop-blur-lg rounded-2xl p-10 shadow-2xl max-w-4xl w-full flex flex-col items-center text-center mt-10">
            
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
                <SiNextdotjs className="text-white text-5xl drop-shadow-lg" /> 
                <span className="mt-2 text-sm text-gray-300">Next.js</span>
              </div>
              <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <SiMongodb className="text-green-500 text-5xl drop-shadow-lg" /> 
                <span className="mt-2 text-sm text-gray-300">MongoDB</span>
              </div>
            </div>
    
            {/* Botón con ícono de LinkedIn */}
            <Button text="LinkedIn" icon={<FaLinkedin className="text-xl" />} />
          </div>
    </div>
  );
}

export default Page;

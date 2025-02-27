"use server"
import React from "react";
import { FaNodeJs, FaReact, FaDatabase, FaLinux, FaGitAlt, FaAws } from "react-icons/fa";
import SectionTiles from "./titles/SectionTiles";

const skills = [
  { category: "Backend & APIs", items: ["Node.js", "Typescript", "Google APIs"], icon: FaNodeJs },
  { category: "Frontend", items: ["React.js","Next.js" ,"Vue.js", "React Native", "Expo"], icon: FaReact },
  { category: "Databases", items: ["SQL", "MongoDB", "Firebase", "Google Cloud"], icon: FaDatabase },
  { category: "DevOps", items: ["SSH", "NGINX", "Linux"], icon: FaLinux },
  { category: "Collaboration", items: ["Git", "Agile methodologies"], icon: FaGitAlt },
];

const extras = [
  { category: "Extras", items: ["Java", "Spring", "AWS"], icon: FaAws },
];

function TechnologiesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto my-16 p-10 bg-[#244256] text-white rounded-3xl relative">
      <SectionTiles color='text-cyan-300' text='Technologies' imageSrc='/logo_fondo-blanco.png'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3 pt-4 gap-6">
        {skills.map(({ category, items, icon: Icon }, index) => (
          <div 
            key={index} 
            className="relative bg-[#2C4A5F] p-6 rounded-2xl border border-transparent 
              transition-all duration-300 transform scale-100 hover:scale-105 
              hover:border-cyan-300/40"
          >
            {/* Efecto de brillo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/10 to-transparent rounded-2xl opacity-20 blur-xl"></div>

            <div className="flex items-center gap-3 mb-4 relative z-10">
              <Icon className="text-cyan-300 w-8 h-8" />
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
            <div className="text-gray-300 text-sm relative z-10">
              {items.map((item, i) => (
                <p key={i} className="py-1">{item}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Contenedor para Extras */}
        {extras.map(({ category, items, icon: Icon }, index) => (
          <div 
            key={index} 
            className="relative bg-[#2C4A5F] p-6 rounded-2xl border border-transparent 
              transition-all duration-300 transform scale-100 hover:scale-105 
              hover:border-yellow-300/40"
          >
            {/* Efecto de brillo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 to-transparent rounded-2xl opacity-20 blur-xl"></div>

            <div className="flex items-center gap-3 mb-4 relative z-10">
              <Icon className="text-yellow-300 w-8 h-8" />
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
            <div className="text-gray-300 text-sm relative z-10">
              {items.map((item, i) => (
                <p key={i} className="py-1">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-gray-300 text-sm">
        <p><strong>English:</strong> Speaking (Intermediate), Reading (Intermediate)</p>
      </div>
    </section>
  );
}

export default TechnologiesSection;

import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  footerText: string;
}

export function Card({ title, description, imageSrc, imageAlt, footerText }: CardProps) {
  return (
    <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl 
      max-w-[250px] sm:max-w-xs md:max-w-md text-center 
      flex flex-col items-center transition-transform duration-300 hover:scale-105 
      border border-white/20 hover:shadow-[0px_4px_10px_rgba(23,63,63,0.9)]">
      
      <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-2xl opacity-50 blur-lg"></div>

      <h3 className="text-lg font-semibold text-white relative z-10">{title}</h3>
      <p className="text-gray-300 text-sm relative z-10">{description}</p>
      <div className="flex justify-center mt-3 relative z-10">
        <Image src={imageSrc} alt={imageAlt} width={180} height={100} className="rounded-lg" />
      </div>
      <p className="text-gray-400 text-xs mt-2 relative z-10">{footerText}</p>
    </div>
  );
}

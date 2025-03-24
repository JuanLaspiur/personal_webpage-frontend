// @ts-expect-error: Ignoring type mismatch due to dynamic import handling
import { Suspense } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  footerText: string;
  videoSrc?: string;
  icon?: JSX.Element;
}

export function Card({ title, description, imageSrc, imageAlt, footerText, videoSrc = '/proyecto.mp4', icon }: CardProps) {
  return (
    <div className="relative bg-black/10 backdrop-blur-xl min-h-[300px] w-[230px] p-6 rounded-2xl border border-white/20 
      max-w-[250px] sm:max-w-xs md:max-w-md text-center flex flex-col items-center 
      transition-transform duration-300 hover:scale-105 overflow-hidden">
      {videoSrc ? (
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="flex justify-center mt-3 relative z-10">
          <Suspense fallback={<div className="w-[180px] h-[100px] bg-gray-700 animate-pulse rounded-lg"></div>}>
            <Image src={imageSrc} alt={imageAlt} width={180} height={100} className="rounded-lg" />
          </Suspense>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <p className="text-gray-400 text-xs mt-2">{footerText}</p>
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';

interface MainTitlesProps {
  topText: string; 
  bottomText: string; 
}

const MainTitles: React.FC<MainTitlesProps> = ({ topText, bottomText }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {/* Es un gif quiero que se meuva una vez despues quede statico */}
            <Image src="/logo_sin-fondo.gif" alt="Juan Laspiur Logo" width={110} height={110} />
          </div>
      <span className="bg-gradient-to-r from-[#173F3F] to-[#fff] bg-clip-text text-transparent text-4xl md:text-6xl font-bold leading-tight">
        {topText}
      </span>
      <br />
      <span className="text-[#244256] text-4xl md:text-6xl font-bold leading-tight" data-aos="fade-up">
        {bottomText}
      </span>
      <p className="text-gray-400 mt-4">
        Ship higher-quality software faster. Be the hero of your engineering teams.
      </p>
    </>
  );
};

export default MainTitles;

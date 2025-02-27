import React from 'react';
import Image from 'next/image'; // Importación de Image de Next.js

interface SectionTilesProps {
  text: string;
  color?: string;
  imageSrc?: string;
}

const SectionTiles: React.FC<SectionTilesProps> = ({ text, color = 'text-gray-500', imageSrc }) => {
  return (
    <h2 className={`text-3xl font-bold text-center ${color} tracking-wide flex items-center justify-center`}>
      {imageSrc && (
        <div className="flex items-center justify-center mr-3">
          <Image src={imageSrc} alt="icon" width={44} height={44} className=' rounded-2xl '/>
        </div>
      )}
      {text}
    </h2>
  );
}

export default SectionTiles;

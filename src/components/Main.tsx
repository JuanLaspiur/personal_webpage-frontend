import { FaRocket } from "react-icons/fa";
import Button from "./buttons/Button";
import MainTitles from "./titles/MainTitles";
import Image from "next/image";

export default function Main() {
  return (
    <div>  <Image
    src="/universo.jpg"
    alt="Universe Background"
    layout="fill"
    objectFit="cover"
   quality={100} 
  />  
   <div className="absolute inset-0 bg-black opacity-70 z-[1]"></div>
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent  z-[1]"></div>
    <main className="text-center max-w-2xl my-10 mb-16 pb-10 relative z-[99]">
      
      <MainTitles topText="Radically better" bottomText="observability stack" />
      <div className="mt-6 flex flex-col md:flex-row gap-2 justify-center z-[99]">
        <input
          type="email"
          placeholder="Your work email"
          className="p-3 rounded-lg bg-gray-800 text-white outline-none lg:w-64"
        />

        <Button
          text="Start for free"
          originalColor="#244256"
          hoverColor="#315A75"
          textColor="#fff"
          hoverTextColor="#fff"
          icon={<FaRocket className="text-lg" />}
        />
      </div>

      <p className="text-gray-500 mt-4">
        Start monitoring for free or <a href="#" className="text-[#315A75] underline">book a demo</a>
      </p>
    </main></div>
  );
}

  
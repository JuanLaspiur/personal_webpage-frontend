import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SocialFooter from "./cards/SocialFooter";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-[100px] py-4">
    <div className="flex items-center  gap-2">
        <Image src="/logo_sin-fondo.gif" alt="Juan Laspiur Logo" width={50} height={50} />
        <span className="bg-gradient-to-r from-[#fff] to-[#4F4F4F] bg-clip-text text-transparent text-xl font-bold leading-tight">
          Juan Laspiur
      </span>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-4">
        <div className="max-w-md">
          <p className="text-gray-400">
            Better Stack lets you see inside any stack, debug any issue, and resolve any incident.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <FaPhoneAlt  />
            <p>+54 (291) 404-5485</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <FaEnvelope />
            <p>laspiurperezjuan@gmail.com</p>
          </div>
        </div>
           <SocialFooter/>
  
      </div>
    </footer>
  );
}

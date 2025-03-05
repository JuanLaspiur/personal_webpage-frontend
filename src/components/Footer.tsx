import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-[100px] py-4">
    <div className="flex items-center  gap-1">
        <Image src="/logo_sin-fondo.gif" alt="Juan Laspiur Logo" width={50} height={50} />
        <Image src="/logo-removebg-preview.png" alt="Juan Laspiur Logo" width={140} height={140} />
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
            <p>+1 (201) 500-2007</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <FaEnvelope />
            <p>laspiurperezjuan@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-4 mt-4 lg:mt-0">
          <FaInstagram className="text-gray-400 hover:text-white text-xl cursor-pointer" />
          <FaLinkedin className="text-gray-400 hover:text-white text-xl cursor-pointer" />
          <FaGithub className="text-gray-400 hover:text-white text-xl cursor-pointer" />
          <FaYoutube className="text-gray-400 hover:text-white text-xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

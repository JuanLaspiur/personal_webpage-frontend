import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-fulltext-white px-[100px]">
     <div className="flex items-center gap-2">
           <Image src="/logo_sin-fondo.png" alt="Juan Laspiur Logo" width={70} height={70} />
           <h1 className="text-lg font-semibold">Juan Laspiur</h1>
         </div>

       <div className="w-[100%] flex flex-row gap-4">
          <div className="w-[100%] ">
    
            <p className="text-gray-400">
              Better Stack lets you see inside any stack, debug any issue, and resolve any incident.
            </p>
          </div>
          {/* contacto */}
          <div className="w-[100%] " >
          <p className="text-gray-400 px-4">+1 (201) 500-2007</p>
        </div>
        <div>
        <p className="text-gray-400  px-4">hello@betterstack.com</p>
        </div>
        <div className="w-[100%] flex flex-row gap-4 ">
  <FaInstagram className="text-gray-400 hover:text-white text-xl cursor-pointer" />
  <FaLinkedin className="text-gray-400 hover:text-white text-xl cursor-pointer" />
  <FaGithub className="text-gray-400 hover:text-white text-xl cursor-pointer" />
  <FaYoutube className="text-gray-400 hover:text-white text-xl cursor-pointer" />
</div>
</div>
    </footer>
  );
}

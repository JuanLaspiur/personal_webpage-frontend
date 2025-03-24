"use client";
import Image from "next/image";
// import Link from "next/link";
import { FaGlobe } from "react-icons/fa"; // Importar el icono de mundo
import Button from "./buttons/Button";

export default function Header() {
  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 relative z-[99]">
      <div className="flex items-center gap-2">
        <Image src="/logo_sin-fondo.gif" alt="Juan Laspiur Logo" width={50} height={50} />
        <span className="bg-gradient-to-r from-[#fff] to-[#4F4F4F] bg-clip-text text-transparent text-xl font-bold leading-tight">
          Juan Laspiur
      </span>
      </div>
      {/** 
      <nav className="hidden md:flex gap-6 z-[100]">
        <Link href="/" className="text-gray-400 hover:text-white">
          Platform
        </Link>
        <Link href="/documentos" className="text-gray-400 hover:text-white">
          Documentation
        </Link>
        <Link href="/sobremi" className="text-gray-400 hover:text-white">
          About me
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white">
          Community
        </Link>
      </nav>*/}
      <Button
        text="EN"
        onClick={handleSignUp}
        originalColor="#fff"
        hoverColor="#244256"
        textColor="#244256"
        hoverTextColor="#fff"
        icon={<FaGlobe />}
      />
    </header>
  );
}

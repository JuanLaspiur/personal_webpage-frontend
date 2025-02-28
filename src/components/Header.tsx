"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./buttons/Button";

export default function Header() {
  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };

  return (
    <header className="w-full flex justify-between items-center px-8 py-4  relative z-[99]">
      <div className="flex items-center gap-2">
        <Image src="/logo_sin-fondo.png" alt="Juan Laspiur Logo" width={70} height={70} />
        <h1 className="text-lg font-semibold">Juan Laspiur</h1>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link href="/" className="text-gray-400 hover:text-white">
          Platform
        </Link>
        <Link href="/documentos" className="text-gray-400 hover:text-white">
          Documentation
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white">
          Pricing
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white">
          Community
        </Link>
      </nav>
      <Button
        text="Sign Up"
        onClick={handleSignUp}
        originalColor="#fff"
        hoverColor="#244256"
        textColor="#244256"
        hoverTextColor="#fff"
      />
    </header>
  );
}


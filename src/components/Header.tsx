import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-2">
        <Image src="/logo_sin-fondo.png" alt="Juan Laspiur Logo" width={70} height={70} />
        <h1 className="text-lg font-semibold">Juan Laspiur</h1>
      </div>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-gray-400 hover:text-white">Platform</a>
        <a href="#" className="text-gray-400 hover:text-white">Documentation</a>
        <a href="#" className="text-gray-400 hover:text-white">Pricing</a>
        <a href="#" className="text-gray-400 hover:text-white">Community</a>
      </nav>
      <button className="bg-[#fff] px-4 py-2 rounded-lg text-[#244256] hover:bg-[#244256] hover:text-[#fff]">
        Sign Up
      </button>
    </header>
  );
}

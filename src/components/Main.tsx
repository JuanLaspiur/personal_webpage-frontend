import Image from "next/image";
import Button from "./buttons/Button";
export default function Main() {
    return (
      <main className="text-center max-w-2xl mt-16">
            <div className="flex items-center justify-center gap-2">
                <Image src="/logo_sin-fondo.png" alt="Juan Laspiur Logo" width={70} height={70} />
              </div>
        <span className="bg-gradient-to-r from-[#173F3F] to-[#fff] bg-clip-text text-transparent text-4xl md:text-6xl font-bold leading-tight">
          Radically better 
        </span>
        <span className="text-[#244256] text-4xl md:text-6xl font-bold leading-tight"> observability stack </span>
        <p className="text-gray-400 mt-4">
          Ship higher-quality software faster. Be the hero of your engineering teams.
        </p>
  
        <div className="mt-6 flex flex-col md:flex-row gap-2 justify-center">
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
               />
        </div>
  
        <p className="text-gray-500 mt-4">
          Start monitoring for free or <a href="#" className="text-[#315A75] underline">book a demo</a>
        </p>
      </main>
    );
  }
  
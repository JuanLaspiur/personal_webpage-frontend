import Image from "next/image";
import Footer from "../../components/Footer";

export default function Home() {
  return (<>
    <div className="min-h-screen flex flex-col items-center bg-black text-white px-8">
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

      <main className="text-center max-w-2xl mt-16">
      <span className="bg-gradient-to-r from-[#173F3F] to-[#fff] bg-clip-text text-transparent text-4xl md:text-6xl font-bold leading-tight">
  Radically better 
</span>
<span className="text-[#244256] text-4xl md:text-6xl font-bold leading-tight">observability stack</span>
        <p className="text-gray-400 mt-4">
          Ship higher-quality software faster. Be the hero of your engineering teams.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-2 justify-center">
          <input
            type="email"
            placeholder="Your work email"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none w-64"
          />
          <button className="bg-[#244256] px-6 py-3 rounded-lg text-white hover:bg-[#315A75]">
            Start for free
          </button>
        </div>

        <p className="text-gray-500 mt-4">
          Start monitoring for free or <a href="#" className="text-[#315A75] underline">book a demo</a>
        </p>
      </main>

      <section className="w-full max-w-6xl mt-24 text-center py-6">
        <h2 className="text-3xl font-bold">Uptime monitoring</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Error 502</h3>
            <p className="text-gray-400">Bad gateway</p>
            <div className="flex justify-center mt-4">
              <Image src="/logo_sin-fondo.png" alt="Error 502" width={400} height={250} />
            </div>
            <p className="text-gray-500 mt-2">Screenshots for errors</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Traceroute & MTR</h3>
            <p className="text-gray-400">Understand connection timeouts</p>
            <div className="flex justify-center mt-4">
              <Image src="/logo_sin-fondo.png" alt="Traceroute MTR" width={400} height={250} />
            </div>
            <p className="text-gray-500 mt-2">Analyze network issues</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
</>
  );
}

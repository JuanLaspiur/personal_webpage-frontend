import Image from "next/image";

export default function Section() {
  return (
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
  );
}

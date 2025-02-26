import { Card } from "./cards/Card";

export default function Section() {
  return (
    <section className="w-full flex flex-col items-center mt-16 py-6">
      <h2 className="text-3xl font-bold text-white">Uptime Monitoring</h2>
      <div className="mt-6 bg-[#1E1E1E] rounded-2xl p-6 shadow-lg max-w-4xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <Card
            title="Error 502"
            description="Bad gateway"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Error 502"
            footerText="Screenshots for errors"
          />
          <Card
            title="Traceroute & MTR"
            description="Understand connection timeouts"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Traceroute MTR"
            footerText="Analyze network issues"
          />
          <Card
            title="Latency Monitoring"
            description="Detect slow network responses"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Latency Monitoring"
            footerText="Track response times"
          />
          <Card
            title="Latency Monitoring"
            description="Detect slow network responses"
            imageSrc="/logo_sin-fondo.png"
            imageAlt="Latency Monitoring"
            footerText="Track response times"
          />
        </div>
      </div>
    </section>
  );
}

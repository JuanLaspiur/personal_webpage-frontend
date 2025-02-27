import { Card } from "./cards/Card";
import SectionTiles from "./titles/SectionTiles";

export default function Section() {
  return (
    <section className="w-full flex flex-col items-center mt-16 py-6">
      <SectionTiles text='Uptime Monitoring' imageSrc='/logo_sin-fondo.png' />
      <div className="mt-6 rounded-2xl py-6 shadow-lg w-full mx-auto">
        <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
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

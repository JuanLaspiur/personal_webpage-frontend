import { FaRocket } from "react-icons/fa";
import Button from "./buttons/Button";
import MainTitles from "./titles/MainTitles";

export default function Main() {
  return (
    <main className="text-center max-w-2xl mt-10">
      <MainTitles topText="Radically better" bottomText="observability stack" />
    

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
          icon={<FaRocket className="text-lg" />}
        />
      </div>

      <p className="text-gray-500 mt-4">
        Start monitoring for free or <a href="#" className="text-[#315A75] underline">book a demo</a>
      </p>
    </main>
  );
}

  
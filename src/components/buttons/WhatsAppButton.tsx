"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/542914045485", "_blank"); 
  };

  return (
    <>
      {showScroll && (
        <button
          onClick={openWhatsApp}
          className="fixed z-[999] bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
        >
          <FaWhatsapp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default WhatsAppButton;

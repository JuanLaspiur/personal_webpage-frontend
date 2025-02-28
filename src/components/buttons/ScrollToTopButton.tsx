"use client"
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed z-[999] bottom-6 right-6 bg-[#244256] hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

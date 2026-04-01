import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 bg-[#0A0A0A] text-white rounded-full shadow-lg transition-all hover:bg-[#111111] hover:shadow-xl z-50"
      aria-label="Back to top"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  );
}

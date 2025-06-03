import { useEffect, useRef } from "react";
import "./index.css"
const ScrollToTopButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const scrollFunction = () => {
      const btn = buttonRef.current;
      if (btn) {
        btn.style.display =
          document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
            ? "block"
            : "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      ref={buttonRef}
      onClick={topFunction}
      id="myBtn"
      title="Go to top"
    >
      <svg
        className="w-5 h-5 rotate-[-90deg]"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;

"use client";
const ScrollToArrow = ({ querySelector }: { querySelector: string }) => (
  <svg
    className="w-6 h-6 text-white cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    onClick={() => {
      const nextSection = document.querySelector(querySelector);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

export default ScrollToArrow;

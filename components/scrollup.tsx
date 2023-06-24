"use client";
const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export default function ScrollUp() {
  return (
    <button
      className="text-stone-400 hover:text-stone-700 transition-colors text-sm"
      onClick={handleScrollToTop}
    >
      Back to top
    </button>
  );
}

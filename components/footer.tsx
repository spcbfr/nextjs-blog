import Link from "next/link";
export default function Footer() {
  return (
    <div className="font-sans py-6 bg-stone-100 flex px-20">
      <div>
        <h2 className=" font-display font-bold mb-3 text-xl ">
          Want to be always up to date?
        </h2>
        <Link
          href="/rss.xml"
          className="px-6 py-2 font-semibold text-stone-500 border-stone-500 hover:text-stone-900 hover:border-stone-900 transition-colors border-2 inline-block rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 relative bottom-[1px] mr-1 inline h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>
          Subscribe to RSS
        </Link>
      </div>
    </div>
  );
}

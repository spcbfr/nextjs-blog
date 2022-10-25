import Image from "next/image";
import Link from "next/link";
import ProfilePic from "/public/me.png";

export default function Navbar() {
  return (
    <nav className="sm:px-12 lg:px-48 py-4 items-center bg-slate-50 flex justify-between">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={ProfilePic}
          className="rounded-full"
          height={50}
          width={50}
        />
        <h1 className="font-display sm:text-2xl text-xl font-bold">
          Youssef Bouzekri
        </h1>
      </Link>
      <ul className="font-semibold flex gap-5 text-[0.9rem] sm:text-lg">
        <li>
          <Link href="/uses">Uses</Link>
        </li>
        <a
          href="https://ko-fi.com/spacebuffer"
          className="flex items-center gap-2"
        >
          <li>Support Me</li>
        </a>
        <a className="self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#77767b"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M48,144a64,64,0,0,1,64,64"
              fill="none"
              stroke="#77767b"
              strokeLineCap="round"
              stroke-linejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M48,96A112,112,0,0,1,160,208"
              fill="none"
              stroke="#77767b"
              strokeLineCap="round"
              stroke-linejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
              fill="none"
              stroke="#77767b"
              strokeLineCap="round"
              stroke-linejoin="round"
              strokeWidth="16"
            ></path>
            <circle cx="52" cy="204" r="12"></circle>
          </svg>
        </a>
      </ul>
    </nav>
  );
}

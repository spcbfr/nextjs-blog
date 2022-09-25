import Image from "next/image";
import Link from "next/link";
import ProfilePic from "/public/me.png";

export default function Navbar() {
  return (
    <nav className=" bg-slate-600/30 flex justify-between items-center px-3   top-10 backdrop-blur p-2 rounded-2xl sticky">
      <div className="transition hover:scale-110 relative top-1">
        <Link href="/">
          <Image
            src={ProfilePic}
            width="40"
            height="40"
            className="rounded-full cursor-pointer"
          />
        </Link>
      </div>
      <a
        className="font-semibold"
        target={"_blank"}
        href="https://twitter.com/spacebuffer"
      >
        Twitter
      </a>
    </nav>
  );
}

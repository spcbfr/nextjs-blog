import Image from "next/image";
import Link from "next/link";
import ProfilePic from "/public/me.png";

export default function Navbar() {
  return (
    <nav className=" bg-slate-600/30 flex  top-10 backdrop-blur p-2 rounded-2xl fixed ">
      <Link href="/">
        <Image
          src={ProfilePic}
          width="40"
          height="40"
          className="rounded-full cursor-pointer"
        />
      </Link>
    </nav>
  );
}

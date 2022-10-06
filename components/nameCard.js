import Image from "next/image";
import profilePic from "/public/me.png";
import { TwitterLogo } from "phosphor-react";
import Link from "next/link";
export default function NameCard() {
  return (
    <section className="flex items-center justify-between mt-10">
      <div className="flex">
        <Image
          src={profilePic}
          height="100"
          width={100}
          placeholder="blur"
          className="rounded-full"
        />
        <section className="ml-6 mt-2">
          <h2 className="text-3xl font-black text-miami">Youssef Bouzekri</h2>
          <h5 className="text-lg">Computer Science Student</h5>
        </section>
      </div>
      <a href="https://twitter.com/spacebuffer">
        <TwitterLogo
          className=" transition-transform hover:rotate-12  ease-in-out"
          weight={"duotone"}
          color="rgb(5 240 224)"
          size={48}
        />
      </a>
    </section>
  );
}

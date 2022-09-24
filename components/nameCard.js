import Image from "next/image";
import profilePic from "/public/me.png";
export default function NameCard() {
  return (
    <section className="flex flex-row mt-10">
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
    </section>
  );
}

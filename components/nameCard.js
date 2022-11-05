import Image from "next/image";
import profilePic from "/public/me.webp";
export default function NameCard() {
  return (
    <section className="flex items-center justify-between mt-10">
      <div className="flex">
        <Image
          src={profilePic}
          width="80"
          height={80}
          className="rounded-full "
        />
        <section className="ml-6 mt-2">
          <h2 className="sm:text-3xl text-2xl font-black text-black dark:text-zinc-200 font-display">
            Youssef Bouzekri
          </h2>
          <h5 className="sm:text-lg">Computer Science Student</h5>
        </section>
      </div>
    </section>
  );
}

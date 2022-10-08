import Link from "next/link";
import Date from "../components/date";
export default function PostCard({ postsData }) {
  return (
    <>
      {postsData.map(({ id, date, title }) => (
        <li className="pb-5 flex justify-between" key={id}>
          <Link href={`/posts/${id}`}>
            <a className="sm:text-3xl text-xl text-black font-bold">{title}</a>
          </Link>
          <br />
          <p className=" text-zinc-500 font-semibold">
            <Date dateString={date} />
          </p>
        </li>
      ))}
    </>
  );
}

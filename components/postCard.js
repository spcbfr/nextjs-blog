import Link from "next/link";
import Date from "../components/date";
export default function PostCard({ postsData }) {
  return (
    <>
      {postsData.map(({ id, date, title, slogan }) => (
        <li className="pt-1" key={id}>
          <Link href={`/posts/${id}`}>
            <a className="text-3xl text-sunrise font-bold">{title}</a>
          </Link>
          <br />
          <p className=" text-scott font-semibold">
            <Date dateString={date} /> <span>• {slogan}</span>
          </p>
        </li>
      ))}
    </>
  );
}

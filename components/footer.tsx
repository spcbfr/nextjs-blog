import Link from "next/link";

export default function Footer() {
  return (
    <footer className="  bg-zinc-900 text-zinc-400 mt-3 print:hidden text-sm text-center  py-4">
      Built with NextJS and Contentlayer •{" "}
      <Link href="/rss.xml">
        <a className="underline font-medium decoration-zinc-400">
          Subscribe to RSS
        </a>
      </Link>
    </footer>
  );
}

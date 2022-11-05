import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-zinc-600 bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 mt-3 print:hidden text-sm text-center  py-4">
      Built with NextJS •{" "}
      <Link
        href="/rss.xml"
        className="underline font-medium decoration-slate-400"
      >
        Subscribe to RSS
      </Link>
    </footer>
  );
}

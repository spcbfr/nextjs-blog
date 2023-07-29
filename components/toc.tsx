import ScrollUp from "./scrollup";

type heading = {
  level: string;
  text: string;
  slug: string;
};
export default function TableOfContents({ headings }: { headings: heading[] }) {
  return (
    <div className="sticky top-6 xl:!col-start-4 xl:row-span-6 xl:row-start-3 hidden space-y-2 font-sans xl:block">
      <div className="text-sm uppercase font-sans text-stone-500">
        On this page
      </div>
      {headings.map((heading: any) => {
        return (
          <div
            key={heading.slug}
            className="data-[level=two]:pl-4 data-[level=three]:pl-8"
            data-level={heading.level}
          >
            <a
              href={`#${heading.slug}`}
              className="underline-offset-3 text-stone-800 decoration-stone-700 transition-all hover:text-stone-700 hover:underline "
            >
              {heading.text}
            </a>
          </div>
        );
      })}
      <hr className="pb-2 w-7" />
      <ScrollUp />
    </div>
  );
}

import { webmentionEntry } from "app/posts/[slug]/webmention-types";

export default function Likes({ source }: { source: webmentionEntry[] }) {
  if (source.length !== 0) {
    return (
      <>
        <h2 className="text-3xl font-display font-bold">Likes & Reposts</h2>
        <div className="inline-flex flex-row-reverse mt-4">
          {source.map((like, i) => {
            if (like.author.photo) {
              return (
                <span
                  key={i}
                  className="relative border-[3px] border-solid border-zinc-100 rounded-full [&:not(:last-child)]:-ml-7"
                >
                  <img
                    src={like.author.photo}
                    className="h-16 w-16 rounded-full"
                    alt={`the profile picture of ${like.author.name}`}
                  />
                </span>
              );
            }
          })}
        </div>
      </>
    );
  } else return null;
}

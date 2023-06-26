import { webmentionEntry } from "app/posts/[slug]/webmention-types";
import Icon from "./sourceSiteIcon";
export default function Comments({ source }: { source: webmentionEntry[] }) {
  if (source.length !== 0) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-display font-bold">Replies</h2>
        <CommentList source={source} />
      </div>
    );
  } else return null;
}
function CommentList({ source }: { source: webmentionEntry[] }) {
  return (
    <>
      {source.map((comment, index: number) => {
        const regex =
          /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}/;
        const sourceSiteMatcher = comment.url.match(regex);
        const sourceSite = sourceSiteMatcher
          ? sourceSiteMatcher[1]
          : "No Site Detected";
        return <Comment data={comment} key={index} icon={sourceSite} />;
      })}
    </>
  );
}
function Comment({ data, icon }: { data: webmentionEntry; icon: string }) {
  return (
    <div>
      <div className="flex items-start flex-col gap-2">
        <div className="space-x-2">
          <img
            src={data.author.photo}
            alt={data.author.name}
            className="h-10 w-10 rounded-full inline"
          />
          <div className="inline">
            <a className="font-bold text-lg" href={data.url}>
              {data.author.name}
            </a>{" "}
            from{" "}
            <span className="[&>svg]:inline relative bottom-[2px]">
              <Icon site={icon} size={22} />
            </span>
          </div>
        </div>
        <p className="[&>ol]:list-decimal [&>ul]:list-disc [&>ul]:list-inside">
          {data.content.text}
        </p>
      </div>
    </div>
  );
}

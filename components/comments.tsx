import type { webmentionEntry } from "app/posts/[slug]/page"
import Icon from "./sourceSiteIcon";
export default function Comments({ source }: {source: webmentionEntry[]}) {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}/;

  return (
    <>
      <h2 className="text-3xl font-display font-bold">Replies</h2>
      {source.length ? source.map((comment, index: number) => {
        const sourceSite = comment.url.match(regex)
          return (
            <div key={index}>
              <div className="flex items-start flex-col gap-2">
                <div className="space-x-2">
                  <img src={comment.author.photo} alt={comment.author.name} className="w-10 rounded-full inline" />
                  <div className="inline"><a className="font-bold text-lg" href={comment.url}>{comment.author.name}</a> from <span className="[&>svg]:inline relative bottom-[2px]"><Icon site={sourceSite ? sourceSite[1] : "random"} size={22} /></span></div>
                </div>
                <p className="[&>ol]:list-decimal [&>ul]:list-disc [&>ul]:list-inside">{comment.content.text}</p> 
              </div>
            </div>
          )
      }) : <div>There are no replies to be found!</div>
      }
    </>
  )
}

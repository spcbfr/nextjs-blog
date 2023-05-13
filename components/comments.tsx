import type { webmentionEntry } from "app/posts/[slug]/page"
export default function Comments({ source }: {source: webmentionEntry[]}) {
  return (
    <section className=" bg-zinc-100 p-3 rounded-md font-sans flex flex-col gap-4">
      <h2 className="text-3xl font-display font-bold">Replies</h2>
      {source.length ? source.map((comment, index: number) => {
          return (
            <div key={index}>
              <div className="flex items-start flex-col gap-2">
                <div className="space-x-2">
                  <img src={comment.author.photo} alt={comment.author.name} className="w-10 rounded-full inline" />
                  <a className="font-bold text-lg" href={comment.url}>{comment.author.name}</a>
                </div>
                <p className="[&>ol]:list-decimal [&>ul]:list-disc [&>ul]:list-inside">{comment.content.text}</p> 
              </div>
            </div>
          )
      }) : <div>There are no replies to be found!</div>
      }
    </section>
  )
}

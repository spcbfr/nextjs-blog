export default function Comments({ source }: {source: any}) {
  return (
    <section className=" bg-zinc-100 p-3 rounded-md font-sans flex flex-col gap-4">
      <h2 className="text-3xl font-display font-bold">Replies</h2>
      {source.children.length ? source.children.map((comment: any, index: number) => {
        if (comment["wm-property"] === "in-reply-to" || comment["wm-property"] === "mention-of") {
          return (
            <div key={index}>
              <div className="flex items-start flex-col gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <div className="space-x-2">
                  <img src={comment.author.photo} alt={comment.author.name} className="w-10 rounded-full inline" />
                  <a className="font-bold font-bold text-lg" href={comment.url}>{comment.author.name}</a>
                </div>
                <div>
                  {(comment.content ? <div className="[&>ol]:list-decimal [&>ul]:list-disc [&>ul]:list-inside" dangerouslySetInnerHTML={{ __html: comment.content.text }} /> : null)}
                </div>
              </div>
            </div>
          )
        }
      }) : <div>There are no replies to be found!</div>
      }
    </section>
  )
}

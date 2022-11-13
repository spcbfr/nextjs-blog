export const components = {
  h1: (props: any) => <h2 className="relative pt-10 -mt-10 w-fit font-display font-bold xl:text-3xl text-2xl" {...props} />,
  h2: (props: any) => <h3 className="relative  pt-10 -mt-10 font-sans font-bold xl:text-xl uppercase xl:normal-case  " {...props} />,
  hr: (props: any) => <hr className="mx-20 my-4 border-zinc-600" {...props} />,
  ul: (props: any) => (
    <ul
      className="space-y-3 font-sans text-lg [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-zinc-100/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="list-decimal font-sans text-lg space-y-3 pl-10" {...props} />
  ),
  a: (props: any) => (
    <a className=" text-yellow-500 underline decoration-zinc-700 hover:decoration-zinc-600 transition-all decoration-2 underline-offset-2 font-semibold" {...props}/>
  ),
  Table: (props: any) => (
    <table className="font-sans table-auto [&>thead]:border-b-2 [&>thead]:border-b-yellow-500 [&>thead>tr>th]:p-2 [&>thead]:bg-zinc-700 border-2 border-zinc-500 [&>tbody>tr>td]:p-2 [&>tbody>tr>td]:bg-zinc-800 [&>thead]:rounded-t-lg rounded-lg border-separate " {...props}/>
  ),
  strong: (props: any) => <strong className="font-bold" {...props} />,
  blockquote: (props: any) => <blockquote className="text-xl border-l-4 font-semibold pl-4 border-l-yellow-500" {...props} />,
  p: (props: any) => (
    <p className="relative font-sans text-lg leading-relaxed  text-zinc-100" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-zinc-800 text-sm p-1 rounded-md text-yellow-500" {...props} />
  ),
  del: (props: any) => (
    <del className="text-zinc-100/70 line-through" {...props} />
  ),
};
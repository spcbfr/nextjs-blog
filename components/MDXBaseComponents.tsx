export const components = {
  h1: (props: any) => (
    <h2
      className="relative pt-10 -mt-10 w-fit font-display font-bold xl:text-3xl text-2xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative pt-10 -mt-10 font-sans font-bold xl:text-xl uppercase xl:normal-case  "
      {...props}
    />
  ),
  h3: (props: any) => <h4 className="font-sans font-bold text-lg" {...props} />,
  hr: (props: any) => <hr className="mx-20 my-4 border-zinc-600" {...props} />,
  ul: (props: any) => (
    <ul
      className="space-y-3 font-sans text-lg [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-stone-900/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="list-decimal font-sans text-lg space-y-3 pl-10" {...props} />
  ),
  a: (props: any) => (
    <a
      className=" text-amber-600 underline font-display text-[0.95rem] decoration-stone-200 hover:decoration-stone-300 transition-all decoration-2 underline-offset-2 font-semibold"
      {...props}
    />
  ),

  p: (props: any) => (
    <p
      className="relative font-sans text-lg leading-relaxed  text-zinc-900"
      {...props}
    />
  ),
  Table: (props: any) => (
    <table
      className="font-sans table-auto [&>thead]:border-b-2 [&>thead>tr>th]:p-2 [&>thead]:bg-stone-300 border-2 border-zinc-500 [&>tbody>tr>td]:p-2 [&>tbody>tr>td]:bg-stone-200 [&>thead]:rounded-t-lg rounded-lg border-separate "
      {...props}
    />
  ),
  strong: (props: any) => <strong className="font-bold" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="text-xl [&>p]:font-display border-l-4 font-semibold pl-4 border-l-amber-500"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-stone-200 text-sm py-[2px] px-1 text-stone-700 rounded-md "
      {...props}
    />
  ),
  Del: (props: any) => (
    <del className="text-stone-700/70 line-through" {...props} />
  ),
};

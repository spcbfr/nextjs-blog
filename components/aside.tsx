import React from "react";

export default function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="[&>p]:text-base [&>p]:text-zinc-500 xl:!col-start-4 sm:col-start-3">
      {children}
    </aside>
  );
}

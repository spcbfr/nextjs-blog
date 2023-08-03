"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Callout, { CalloutDetails } from "components/callout";
import Img from "components/img";
import { components } from "components/MDXBaseComponents";
import Aside from "./aside";

export default function MDX({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);
  return (
    <MDXContent
      components={{ Callout, CalloutDetails, Img, Aside, ...components }}
    />
  );
}

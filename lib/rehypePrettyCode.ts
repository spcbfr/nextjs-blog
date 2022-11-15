import { type Options } from "rehype-pretty-code";

export const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  theme: "github-light",
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
};

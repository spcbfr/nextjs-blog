import { type Options } from "rehype-pretty-code";

export const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  theme: "github-light",
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.style =
      "background-color: rgb(231 229 228); padding: 4px; border-radius: 5px";
  },
};

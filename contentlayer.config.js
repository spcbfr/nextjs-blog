import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "./lib/rehypePrettyCode";
import GithubSlugger from "github-slugger";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    toc: {
      type: "boolean",
      required: false,
      default: false,
    },
    unlisted: {
      type: "boolean",
      required: false,
      default: false,
    },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        // use same package as rehypeSlug so toc and sluggified headings match
        // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
        const slugger = new GithubSlugger();

        const regXHeader = /(?:\n\n|^\n?)(?<flag>#{1,6})[ ](?<content>[^\n]+)(?:\n\n)/gm;

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
    },
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeKatex,
      rehypeSlug,
    ],
    remarkPlugins: [remarkMath],
  },
});

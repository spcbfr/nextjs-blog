import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
// process.cwd returns the project folder and we append posts to it to get the directory where the mdx posts are stored
const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const filteredFileNames = fileNames.filter((a) => !a.endsWith(".jsx"));

  const allPostsData = filteredFileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => b.localeCompare(a));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const sortedData = getSortedPostsData();
  const currentPostIndex = sortedData.findIndex((elem) => elem.id == id);
  // Next Previous Posts

  const prevPostData =
    currentPostIndex + 1 < sortedData.length
      ? sortedData[currentPostIndex + 1]
      : null;
  const nextPostData =
    currentPostIndex > 0 ? sortedData[currentPostIndex - 1] : null;

  // Combine the data with the id
  const { code, frontmatter } = await bundleMDX({
    source: fileContents,
  });

  return {
    code,
    frontmatter,
    prevPostData,
    nextPostData,
  };
}

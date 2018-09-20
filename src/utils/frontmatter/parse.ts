import slugify from "slugify";

import { Post } from "../../types";

const findAttribute = (parts: Array<string>, attribute: string) => {
  const match = parts.find(line => line.startsWith(`${attribute}: `));
  if (match) return match.replace(`${attribute}: `, "");
  return null;
};

// TODO: make parser more resilient
const parse = (post: string): Post => {
  const lines = post.split("\n");

  const tags = (findAttribute(lines, "tags") || "")
    .replace(/["\[\]]/g, "")
    .split(", ");

  return {
    title: (findAttribute(lines, "title") || "").replace(/"/g, ""),
    slug: findAttribute(lines, "slug") || "",
    date: findAttribute(lines, "date") || "",
    author: {
      name: findAttribute(lines, "author") || "",
      email: "",
    },
    tags: tags.map(tag => ({
      name: tag,
      slug: slugify(tag),
    })),
  };
};

export default parse;

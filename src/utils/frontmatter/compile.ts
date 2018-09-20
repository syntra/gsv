import { Post } from "../../types";

const compile = (post: Post): string => {
  const tags = post.tags.map(tag => `"${tag.name}"`);
  return `---
title: "${post.title}"
slug: ${post.slug}
date: ${post.date}
author: ${post.author.name}
tags: [${tags.join(", ")}]
---`;
};

export default compile;

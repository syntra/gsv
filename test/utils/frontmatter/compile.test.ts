import { expect } from "@oclif/test";
import { openSync, unlinkSync } from "fs";

import frontmatter from "../../../src/utils/frontmatter";

describe("utils/frontmatter.compile()", () => {
  it("compiles from Post", async () => {
    const date = new Date().toISOString();
    const post = {
      title: "Test Blog Post",
      slug: "test-blog-post",
      date: date,
      author: {
        name: "Garet McKinley",
        email: "hi@garet.io",
      },
      tags: [
        {
          name: "Test",
          slug: "test",
        },
        {
          name: "Another Tag",
          slug: "another-tag",
        },
      ],
    };
    const data = frontmatter.compile(post);
    expect(data).to.equal(`---
title: "Test Blog Post"
slug: test-blog-post
date: ${date}
author: Garet McKinley
tags: ["Test", "Another Tag"]
---`);
  });
});

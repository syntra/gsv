import { expect } from "@oclif/test";
import { openSync, unlinkSync } from "fs";

import frontmatter from "../../../src/utils/frontmatter";

describe("utils/frontmatter.compile()", () => {
  it("compiles from Post", async () => {
    const date = new Date().toISOString();
    const post = `---
title: "Test Blog Post"
slug: test-blog-post
date: ${date}
author: Garet McKinley
tags: ["Test", "Another Tag"]
---`;
    const data = frontmatter.parse(post);
    expect(data.title).to.equal("Test Blog Post");
    expect(data.slug).to.equal("test-blog-post");
    expect(data.date).to.equal(date);
    expect(data.author.name).to.equal("Garet McKinley");
    expect(data.tags.length).to.equal(2);
    expect(data.tags[0].name).to.equal("Test");
    expect(data.tags[1].name).to.equal("Another Tag");
  });
});

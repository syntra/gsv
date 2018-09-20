import { expect } from "@oclif/test";
import { writeFileSync, existsSync, unlinkSync } from "fs";
import YAML from "yaml";

import gsvrc from "../../../src/utils/gsvrc";
import { write } from "fs-extra";

describe("utils/gsvrc.read()", () => {
  before(() => {
    writeFileSync(
      ".gsvrc",
      YAML.stringify({
        title: "Test Blog",
        url: "https://syntra.io",
        author: [
          {
            name: "Garet McKinley",
            email: "hi@garet.io",
          },
        ],
      })
    );
  });

  after(() => {
    unlinkSync(".gsvrc");
  });

  it("reads config", async () => {
    const config = await gsvrc.read();
    expect(config.title).to.equal("Test Blog");
    expect(config.url).to.equal("https://syntra.io");
    expect(config.author.length).to.equal(1);
    expect(config.author[0].name).to.equal("Garet McKinley");
    expect(config.author[0].email).to.equal("hi@garet.io");
  });
});

import { expect } from "@oclif/test";
import { writeFileSync, existsSync, unlinkSync } from "fs";
import YAML from "yaml";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import gsvrc from "../../../src/utils/gsvrc";
import { write } from "fs-extra";

describe("utils/gsvrc.read()", () => {
  it("reads config", async () => {
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
    const config = await gsvrc.read();
    expect(config.title).to.equal("Test Blog");
    expect(config.url).to.equal("https://syntra.io");
    expect(config.author.length).to.equal(1);
    expect(config.author[0].name).to.equal("Garet McKinley");
    expect(config.author[0].email).to.equal("hi@garet.io");

    unlinkSync(".gsvrc");
  });

  it("returns error if config doesn't exist", async () => {
    await chai.expect(gsvrc.read()).to.eventually.be.rejected;
  });
});

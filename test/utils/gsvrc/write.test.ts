import { expect } from "@oclif/test";
import { existsSync, unlinkSync } from "fs";

import gsvrc from "../../../src/utils/gsvrc";

describe("utils/gsvrc.write()", () => {
  it("writes config", async () => {
    await gsvrc.write({
      title: "Test Blog",
      url: "https://syntra.io",
      author: [
        {
          name: "Garet McKinley",
          email: "hi@garet.io",
        },
      ],
    });
    expect(existsSync(".gsvrc")).to.be.true;
    unlinkSync(".gsvrc");
  });

  it("overrides when forced", async () => {
    const config = {
      title: "Test Blog",
      url: "https://syntra.io",
      author: [
        {
          name: "Garet McKinley",
          email: "hi@garet.io",
        },
      ],
    };
    await gsvrc.write(config);
    await gsvrc.write(config, true);
    expect(existsSync(".gsvrc")).to.be.true;
    unlinkSync(".gsvrc");
  });
});

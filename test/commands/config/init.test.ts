import { expect, test } from "@oclif/test";

describe("config:init", () => {
  test
    .stdout()
    .command([
      "config:init",
      "--title",
      '"test blog"',
      "--url",
      "https://syntra.io",
      "--name",
      "Garet McKinley",
      "--email",
      "hi@garet.io",
      "--dry",
    ])
    .it("runs dry", ctx => {
      expect(ctx.stdout).to.be.empty;
    });
});

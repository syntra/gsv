import { expect, test } from "@oclif/test";

describe("new:post", () => {
  test
    .stdout()
    .command(["new:post"])
    .it("runs hello", ctx => {
      expect(ctx.stdout).to.contain("hello world");
    });

  test
    .stdout()
    .command(["new:post", "--name", "jeff"])
    .it("runs hello --name jeff", ctx => {
      expect(ctx.stdout).to.contain("hello jeff");
    });
});

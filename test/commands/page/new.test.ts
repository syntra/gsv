import { expect, test } from "@oclif/test";

describe("page:new", () => {
  test
    .stdout()
    .command(["page:new"])
    .it("runs hello", ctx => {
      expect(ctx.stdout).to.contain("hello world");
    });

  test
    .stdout()
    .command(["page:new", "--name", "jeff"])
    .it("runs hello --name jeff", ctx => {
      expect(ctx.stdout).to.contain("hello jeff");
    });
});

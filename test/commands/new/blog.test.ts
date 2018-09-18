import { expect, test } from "@oclif/test";
import * as rimraf from "rimraf";
import { existsSync } from "fs";
import errors from "../../../src/config/errors";

describe("new:blog", () => {
  test
    .stdout()
    .command(["new:blog"])
    .exit(errors.new.blog.no_path().exit)
    .it("fails when no path is supplied");
  test
    .stdout()
    .command(["new:blog", "path", "--starter", "invalid-starter"])
    .exit(errors.new.blog.invalid_starter().exit)
    .it("fails when invalid starter is set");
  test
    .stdout()
    .command(["new:blog", "test-blog"])
    .it("creates new blog", ctx => {
      expect(existsSync("test-blog")).to.be.true;
      rimraf.sync("test-blog");
    });
});

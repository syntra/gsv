import { expect, test } from "@oclif/test";
import * as rimraf from "rimraf";
import { renameSync, existsSync } from "fs";
import errors from "../../../src/config/errors";

describe("new:blog", () => {
  before(() => {
    const repo = "test/__mock_repo";
    renameSync(`${repo}/git`, `${repo}/.git`);
  });

  after(() => {
    const repo = "test/__mock_repo";
    renameSync(`${repo}/.git`, `${repo}/git`);
  });

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
    .it("creates new blog with default starter", ctx => {
      expect(existsSync("test-blog")).to.be.true;
      rimraf.sync("test-blog");
    });

  test
    .stdout()
    .command(["new:blog", "test-blog", "--customStarter", "test/__mock_repo"])
    .it("creates new blog with custom starter", ctx => {
      expect(existsSync("test-blog")).to.be.true;
      rimraf.sync("test-blog");
    });
});

import { expect } from "@oclif/test";
import * as rimraf from "rimraf";
import { existsSync, renameSync } from "fs";

import git from "../../src/utils/git";

describe("utils/git", () => {
  before(() => {
    const repo = "test/__mock_repo";
    renameSync(`${repo}/git`, `${repo}/.git`);
  });

  after(() => {
    const repo = "test/__mock_repo";
    renameSync(`${repo}/.git`, `${repo}/git`);
  });

  it("clones repo", async () => {
    const repo = "test/__mock_repo";
    const dest = "__test_clone";
    await git.clone(repo, dest);
    expect(existsSync(dest)).to.be.true;
    rimraf.sync(dest);
  });

  it("loads config", async () => {
    const config = await git.config();
    expect(config).to.not.be.empty;
  });
});

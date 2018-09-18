import { expect, test } from "@oclif/test";
import errors from "../../../src/config/errors";

describe("new:blog", () => {
  test
    .stdout()
    .command(["new:blog"])
    .exit(errors.new.blog.no_path().exit)
    .it("fails when no path is supplied");
});

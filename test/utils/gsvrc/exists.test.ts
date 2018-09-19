import { expect } from "@oclif/test";
import { openSync, unlinkSync } from "fs";

import gsvrc from "../../../src/utils/gsvrc";

describe("utils/gsvrc.exists()", () => {
  it("returns false when doesn't exist", async () => {
    expect(await gsvrc.exists()).to.be.false;
  });

  it("returns true when exists", async () => {
    openSync(".gsvrc", "w");
    expect(await gsvrc.exists()).to.be.true;
    unlinkSync(".gsvrc");
  });
});

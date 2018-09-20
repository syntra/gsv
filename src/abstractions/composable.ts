import { writeFile } from "fs";
import * as Generator from "yeoman-generator";

import { GSVRC } from "../types";
import gsvrc from "../utils/gsvrc";

/**
 * Generator abstract that allows bidirectional sharing of data
 */
export default abstract class Composable extends Generator {
  options: {
    composeWith?: string;
  };

  answers: {
    [key: string]: any;
  };

  gsvrc?: GSVRC;

  constructor(args: any, opts: any) {
    super(args, opts);

    this.answers = { ...opts.answers };
    this.options = { composeWith: opts.composeWith };
  }

  async getConfig() {
    this.gsvrc = await gsvrc.read();
    return this.gsvrc;
  }

  async writeFile(file, data) {
    return new Promise((resolve, reject) =>
      writeFile(file, data, (err: Error) => (err ? reject(err) : resolve()))
    );
  }

  async next() {
    if (this.options.composeWith) {
      this.composeWith(this.options.composeWith, {
        answers: this.answers,
      });
    }
  }
}

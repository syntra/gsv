import { flags } from "@oclif/command";

import Base from "../../abstractions/generator/base";
import errors from "../../config/errors";
import starters from "../../config/starters";
import git from "../../utils/git";

// export interface Options {
//   name: string;
// }

export default class NewBlog extends Base {
  static description = "creates a new gatsby blog";

  static flags = {
    help: flags.help({ char: "h" }),
    starter: flags.string({
      char: "s",
      description: "gatsby starter to use",
      default: "default",
    }),
    customStarter: flags.string({
      char: "c",
      description: "use a custom git repo as a starter",
    }),
    skipConfig: flags.boolean({
      description: "skips the config step after creating blog",
    }),
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "path" }];

  async run() {
    const { args, flags } = this.parse(NewBlog);

    if (!args.path) {
      return this.error(errors.new.blog.no_path());
    }

    let starterUrl: string | undefined = flags.customStarter;

    if (!starterUrl) {
      const starter = starters.find(s => s.name === flags.starter);

      if (!starter) {
        return this.error(errors.new.blog.invalid_starter(flags.starter));
      }

      starterUrl = starter.url;
    }

    if (args.path) {
      await git.clone(starterUrl, args.path, {
        log: this.log,
      });
      this.success("Done!");
    }

    if (!flags.skipConfig) {
      await super.generate("gsvrc");
    }
  }
}

import { flags } from "@oclif/command";

import Command from "../../command";
import errors from "../../config/errors";
import starters from "../../config/starters";
import git from "../../utils/git";

// export interface Options {
//   name: string;
// }

export default class NewBlog extends Command {
  static description = "creates a new gatsby blog";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    starter: flags.string({
      char: "n",
      description: "gatsby sttarter to use",
      default: "default",
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "path" }];

  async run() {
    const { args, flags } = this.parse(NewBlog);

    if (!args.path) {
      return this.error(errors.new.blog.no_path());
    }

    const starter = starters.find(s => s.name === flags.starter);

    if (!starter) {
      return this.error(errors.new.blog.invalid_starter(flags.starter));
    }

    if (args.path) {
      await git.clone(starter.url, args.path, {
        log: this.log,
      });
      this.success("Done!");
    }
  }
}

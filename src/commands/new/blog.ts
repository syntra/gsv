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
    const starter = starters.find(s => s.name === flags.starter);

    if (!args.path) {
      this.error(errors.new.blog.no_path);
      return;
    }

    if (!starter) {
      this.error(
        new Error(
          `Invalid starter! ${flags.starter} was not found in starters array.`
        )
      );
      return;
    }

    if (args.path) {
      await git.clone(starter.url, args.path, {
        log: this.log,
      });
      this.success("Done!");
    }
  }
}

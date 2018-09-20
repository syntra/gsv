import { flags } from "@oclif/command";

import Command from "../../abstractions/command";
import git from "../../utils/git";
import gsvrc from "../../utils/gsvrc";

export default class ConfigInit extends Command {
  static description = "initialize a fresh .gsvrc file";

  static flags = {
    help: flags.help({ char: "h" }),
    title: flags.string({
      char: "t",
      description: "blog title",
      required: true,
    }),
    url: flags.string({ char: "u", description: "blog url", required: true }),
    force: flags.boolean({
      char: "f",
      description: "overrides existing .gsvrc",
    }),
    dry: flags.boolean({
      char: "d",
      description: "don't write to .gsvrc",
    }),
  };

  async run() {
    const {
      flags: { title, url, force, dry },
    } = this.parse(ConfigInit);

    const gitConfig = await git.config();

    if (!gitConfig) {
      // TODO: start yeoman generator when no config is found
      this.error("No config found");
    }

    const config = {
      title,
      url,
      author: [{ name: gitConfig.user.name, email: gitConfig.user.email }],
    };

    // this.error(new Error("ERROR"));

    // TODO: dry mode should output .gsvrc markup to stdout
    if (dry) return;

    gsvrc.write(config, force).catch((err: string) => this.error(err));
  }
}

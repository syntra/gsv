import { flags } from "@oclif/command";

import Command from "../../command";
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
  };

  async run() {
    const {
      flags: { title, url, force },
    } = this.parse(ConfigInit);

    const gitConfig = await git.config();

    if (!gitConfig) {
      // TODO: start yeoman generator when no config is found
      this.error("No config found");
    }

    const config = {
      title,
      url,
      author: { name: gitConfig.user.name, email: gitConfig.user.email },
    };

    gsvrc.write(config, force).catch((err: string) => this.error(err));
  }
}

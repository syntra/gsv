import { flags } from "@oclif/command";
import YAML from "yaml";

import Command from "../../command";
import git from "../../utils/git";

export default class ConfigInit extends Command {
  static description = "initialize a fresh .gsvrc file";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  mkConfig(config: { name: string; email: string }) {
    const author = { name: config.name, email: config.email };
    return YAML.stringify({ author });
  }

  async run() {
    const { args, flags } = this.parse(ConfigInit);

    const gitConfig = await git.config();

    if (!gitConfig) {
      // TODO: start yeoman generator when no config is found
      this.error("No config found");
    }

    const config = this.mkConfig({ ...gitConfig.user });

    // TODO: save config to .gsvrc
    this.log(config);

    // TODO: allow the force flag to override existing .gsvrc file
    if (flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}

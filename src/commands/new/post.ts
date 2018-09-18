import { Command, flags } from "@oclif/command";

export default class NewPost extends Command {
  static description = "add a new post to the current blog";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(NewPost);

    const name = flags.name || "world";
    this.log(
      `hello ${name} from /home/garet/Code/gsv/src/commands/new/post.ts`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}

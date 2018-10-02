import Composable from "../abstractions/composable";
import { GSVRC } from "../types";
import git from "../utils/git";
import gsvrc from "../utils/gsvrc";

class App extends Composable {
  gsvrc!: GSVRC;

  async prompting() {
    // try to extract name and email from git config
    const gitConfig = await git.config();
    const author = gitConfig
      ? { name: gitConfig.user.name, email: gitConfig.user.email }
      : {};

    const config = await this.prompt([
      {
        type: "input",
        name: "title",
        message: "what should the title of your blog be",
      },
      {
        type: "input",
        name: "url",
        message: "what is your blogs url",
      },
      // TODO: the author portion of the gsvrc generator should have its own generator
      {
        type: "input",
        name: "name",
        message: "what is your name",
        default: author.name,
      },
      {
        type: "input",
        name: "email",
        message: "and your email",
        default: author.email,
      },
    ]);

    this.gsvrc = {
      title: config.title,
      url: config.url,
      author: [
        {
          name: config.name,
          email: config.email,
        },
      ],
    };
  }

  async writing() {
    await gsvrc.write(this.gsvrc).catch((err: string) => {
      throw new Error(err);
    });

    this.answers = this.options.composeWith
      ? { author: this.gsvrc.author[0] }
      : this.gsvrc;
    this.next();
  }
}

export = App;

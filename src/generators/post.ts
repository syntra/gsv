import * as Generator from "yeoman-generator";
import yosay = require("yosay");

import { Author, GSVRC } from "../types";
import git from "../utils/git";
import gsvrc from "../utils/gsvrc";

class App extends Generator {
  options: {
    defaults?: boolean;
    title?: string;
    date?: string;
    tags?: string;
    author?: string;
  };

  gsvrc!: GSVRC;
  answers!: {};
  author!: Author;

  constructor(args: any, opts: any) {
    super(args, opts);

    this.options = {};
  }

  async prompting() {
    if (await gsvrc.exists()) {
      this.log(yosay("Feeling creative today?"));
    } else {
      this.log(
        yosay(
          "Whoops, it looks like you never set up your .gsvrc! Let's get that setup first, then we can continue creating your blog post."
        )
      );

      const gitConfig = await git.config();
      const author = gitConfig
        ? { name: gitConfig.user.name, email: gitConfig.user.email }
        : {};

      // TODO: make a separate generator for gsvrc
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

      await gsvrc.write(this.gsvrc).catch((err: string) => {
        throw new Error(err);
      });

      this.log(
        yosay(
          "Great! Now that we have that taken care of, let's get back to that blog post."
        )
      );
    }

    // this.answers = await this.prompt([
    //   {
    //     type: "input",
    //     name: "title",
    //     message: "title",
    //   },
    //   {
    //     type: "input",
    //     name: "author",
    //     message: "title",
    //   },
    //   {
    //     type: "input",
    //     name: "title",
    //     message: "title",
    //   },
    //   {
    //     type: "input",
    //     name: "title",
    //     message: "title",
    //   },
    // ]);
  }
}

export = App;

import slugify from "slugify";
import yosay = require("yosay");

import Composable from "../abstractions/composable";
import { GSVRC, Post } from "../types";
import gsvrc from "../utils/gsvrc";

class App extends Composable {
  gsvrc!: GSVRC;
  post!: Post;

  async prompting() {
    if (await gsvrc.exists()) {
      this.log(yosay("Feeling creative today?"));

      await this.getConfig();

      let prompt = await this.prompt([
        {
          type: "input",
          name: "title",
          message: "title",
        },
      ]);

      const slug = slugify(prompt.title, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      });

      prompt = await this.prompt([
        {
          type: "input",
          name: "slug",
          message: "slug",
          default: slug,
        },
        {
          type: "input",
          name: "date",
          message: "date",
          default: new Date().toISOString(),
        },
        {
          type: "list",
          name: "author",
          message: "author",
          choices: this.gsvrc.author,
        },
        {
          type: "input",
          name: "tags",
          message: "tags (comma separated)",
        },
      ]);

      this.post = {
        title: prompt.title,
        slug: prompt.slug,
        date: prompt.date,
        author: prompt.author,
        tags: prompt.tags.split(","),
      };
    } else {
      this.log(
        yosay(
          "Whoops, it looks like you never set up your .gsvrc! Let's get that setup first, then we can continue creating your blog post."
        )
      );

      // Run the gsvrc generator, then return to the post  generator
      await this.composeWith(require.resolve("./gsvrc"), {
        composeWith: require.resolve("./post"),
      });
    }
  }

  async write() {
    // TODO: write post data to frontmatter of new markdown doc
  }
}

export = App;

import slugify from "slugify";
import yosay = require("yosay");

import Composable from "../abstractions/composable";
import { GSVRC, Post } from "../types";
import frontmatter from "../utils/frontmatter";
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

      const title = prompt.title.trim();
      const slug = slugify(title, {
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
        title,
        slug: prompt.slug,
        date: prompt.date,
        author: { name: prompt.author },
        tags: prompt.tags.split(",").map(t => ({
          name: t.trim(),
        })),
      };

      // TODO: move writing to a second method
      // for some reason, when returning to the create post from the
      // gsvrc generator, it doesn't start on this method. I tried adding
      // a `write()` method, but when resuming this generator, it immediately
      // tried writing instead of running this `prompting()` method.
      const file = `${(this.gsvrc.dir && this.gsvrc.dir.posts) || "."}/${
        this.post.slug
      }.md`;
      await this.writeFile(file, `${frontmatter.compile(this.post)}\n\n`);
      this.log(yosay(`New post (${file}) created!`));
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
}

export = App;

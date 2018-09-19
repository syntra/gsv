import * as Config from "@oclif/config";
import { expect, fancy } from "fancy-test";

import Base from "../src/abstractions/command";

class Command extends Base {
  static description = "test command";

  async run() {
    this.parse();
    this.log("foo");
  }
}

describe("command", () => {
  fancy
    .stdout()
    .do(() => Command.run([]))
    .do(output => expect(output.stdout).to.equal(" ›  foo\n"))
    .it("logs to stdout");

  fancy
    .do(async () => {
      class Command extends Base {
        static description = "test command";

        async run() {
          return 101;
        }
      }

      expect(await Command.run([])).to.equal(101);
    })
    .it("returns value");

  fancy
    .do(() => {
      class Command extends Base {
        async run() {
          throw new Error("new x error");
        }
      }

      return Command.run([]);
    })
    .catch(/new x error/)
    .it("errors out");

  fancy
    .stdout()
    .do(() => {
      class Command extends Base {
        async run() {
          this.exit(0);
        }
      }
      return Command.run([]);
    })
    .catch(/EEXIT: 0/)
    .it("exits with 0");

  describe("version", () => {
    fancy
      .stdout()
      .add("config", () => Config.load())
      .do(async () => {
        await Command.run(["--version"]);
      })
      .catch(/EEXIT: 0/)
      .it("shows version", ctx => {
        expect(ctx.stdout).to.equal(` ›  ${ctx.config.userAgent}\n`);
      });
  });

  describe(".error()", () => {
    fancy
      .stdout()
      .add("config", () => Config.load())
      .do(async () => {
        class CMD extends Command {
          async run() {
            this.error(new Error("ERROR"));
          }
        }
        await CMD.run([]);
      })
      .catch(/ERROR/)
      .it("caught error");
  });

  describe(".success()", () => {
    fancy
      .stdout()
      .do(async () => {
        class CMD extends Command {
          async run() {
            this.success("json output: %j", { a: "foobar" });
          }
        }
        await CMD.run([]);
      })
      .do(ctx =>
        expect(ctx.stdout).to.equal(' ✔️  json output: {"a":"foobar"}\n')
      )
      .it("uses util.format()");
  });

  describe(".log()", () => {
    fancy
      .stdout()
      .do(async () => {
        class CMD extends Command {
          async run() {
            this.log("json output: %j", { a: "foobar" });
          }
        }
        await CMD.run([]);
      })
      .do(ctx =>
        expect(ctx.stdout).to.equal(' ›  json output: {"a":"foobar"}\n')
      )
      .it("uses util.format()");
  });
});

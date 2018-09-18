import { Command as OCommand } from "@oclif/command";
import * as Errors from "@oclif/errors";
import chalk from "chalk";
import { format, inspect } from "util";

import { CLIError } from "./types";

const emojic = require("emojic");

/**
 * Overrides @oclif/command to add custom log formatting
 */
export default abstract class Command extends OCommand {
  error(
    input: string | Error | CLIError,
    options: { code?: string; exit: false }
  ): void;
  error(
    input: string | Error | CLIError,
    options?: { code?: string; exit?: number }
  ): never;
  error(
    input: string | Error | CLIError,
    options: { code?: string; exit?: number | false } = {}
  ): input is CLIError {
    // @ts-ignore
    if (typeof input === "object" && input.message && input.exit) {
      const output = [input.message];
      // @ts-ignore
      if (input.help) {
        // @ts-ignore
        output.push(input.help);
      }
      // @ts-ignore
      return Errors.error(output.join("\n"), { exit: input.exit });
    }
    // @ts-ignore
    return Errors.error(input, options as any);
  }

  success(message = "", ...args: any[]) {
    // tslint:disable-next-line strict-type-predicates
    message = typeof message === "string" ? message : inspect(message);
    const prefix = chalk.green(` ${emojic.heavyCheckMark}  `);
    process.stdout.write(format(prefix, message, ...args).trim() + "\n");
  }

  log(message = "", ...args: any[]) {
    // tslint:disable-next-line strict-type-predicates
    message = typeof message === "string" ? message : inspect(message);
    const prefix = chalk.cyan(" ›  ");
    process.stdout.write(format(prefix, message, ...args).trim() + "\n");
  }
}

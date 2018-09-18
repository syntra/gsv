import { Command as OCommand, flags } from "@oclif/command";
import { format, inspect } from "util";
import chalk from "chalk";
import * as emojic from "emojic";

/**
 * Overrides @oclif/command to add custom log formatting
 */
export default abstract class Command extends OCommand {
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

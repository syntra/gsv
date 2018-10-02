import { createEnv } from "yeoman-environment";

import Command from "../command";

export default abstract class CommandBase extends Command {
  protected async generate(type: string, generatorOptions: object = {}) {
    const env = createEnv();

    env.register(require.resolve(`../../generators/${type}`), `gsv:${type}`);

    await new Promise((resolve, reject) => {
      env.run(`gsv:${type}`, generatorOptions, (err: Error, results: any) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }
}

import Base from "./base";

export default abstract class AppCommand extends Base {
  abstract type: string;

  async run() {
    await super.generate(this.type);
  }
}

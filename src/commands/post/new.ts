import AppCommand from "../../abstractions/generator";

export default class extends AppCommand {
  static description = "generate a new multi-command CLI";
  type = "post";
}

import { Command, flags } from "@oclif/command";
import config from "../config";

export default class Logout extends Command {
  static description = "Clear the saved authentication token";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    this.parse(Logout);
    config.delete("token");
    this.log(`
Success!
Authentication token cleared from configuration file.
See configuration file here: ${config.path}

Future requests will be unauthenticated by default.
`);
  }
}

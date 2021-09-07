import { Command, flags } from "@oclif/command";
import cli from "cli-ux";

import config from "../config";

export default class Login extends Command {
  static description = "Generate & save an authentication token";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    this.parse(Login);
    this.log(`
1. Sign in to itopia Spaces here: https://not.really.test

2. After signing in, copy/paste the generated authentication token into the prompt below.
`);
    const token = await cli.prompt("Token:", { type: "hide" });
    config.set("token", token);
    this.log(`
Success!
Authentication token saved to configuration file.
See configuration file here: ${config.path}

Future requests will be authenticated by default.
`);
  }
}

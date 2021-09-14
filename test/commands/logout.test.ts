import { expect, test } from "@oclif/test";

import config from "../../src/config";

describe("logout", () => {
  test
    .stdout()
    .command(["logout"])
    .it("runs", (ctx) => {
      expect(ctx.stdout).to.contain(`
Success!
Authentication token cleared from configuration file.
See configuration file here: ${config.path}

Future requests will be unauthenticated by default.
`);
    });

  test
    .do(() => config.set("token", "test token"))
    .stdout()
    .command(["logout"])
    .it("clears the saved token", (ctx) => {
      expect(ctx.stdout).to.contain(`
Success!
Authentication token cleared from configuration file.
See configuration file here: ${config.path}

Future requests will be unauthenticated by default.
`);
      expect(config.get("token")).to.equal("");
    });
});

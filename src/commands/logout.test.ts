import { expect, test } from "@oclif/test";
import cli from "cli-ux";

import config from "../config";

describe("logout", () => {
  test
    .stdout()
    .command(["logout"])
    .it("runs", async (ctx) => {
      await cli.done();
      expect(ctx.stdout).to.equal(`
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
    .it("clears the saved token", async (ctx) => {
      await cli.done();
      expect(ctx.stdout).to.equal(`
Success!
Authentication token cleared from configuration file.
See configuration file here: ${config.path}

Future requests will be unauthenticated by default.

`);
      expect(config.get("token")).to.equal("");
    });
});

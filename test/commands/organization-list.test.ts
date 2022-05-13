import { expect, test } from "@oclif/test";
import cli from "cli-ux";

describe("organization:list", () => {
  test
    .stdout()
    .command(["organization:list"])
    .it("runs", async (ctx) => {
      await cli.done();
      expect(ctx.stdout).to.equal(`
It looks like your authentication token is expired/missing/invalid. Try running the following:

    $ spaces login

`);
    });

  // TODO: Add an authenticated test for real Teams-tier QA data.
});

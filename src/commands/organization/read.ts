import { flags } from "@oclif/command";

import config from "../../config";
import handler from "../../graphql-query-handler";
import { CommandWithExtraLogging } from "../../logging";

const OrganizationReadDocument = `
query organizationRead($id: ID!) {
  organization(input: {id: $id}) {
    organization {
      id
      name
    }
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class OrganizationRead extends CommandWithExtraLogging {
  static description = "Read all properties of an organization";

  static examples: string[] = [
    "spaces organization:read --id='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(OrganizationRead);
    const data = await handler({
      command: this,
      query: OrganizationReadDocument,
      variables: flags,
    });
    if (config.get("printResponsesPretty")) {
      this.table(data?.organization?.organization);
      this.logProblem(data?.organization?.problem);
    }
  }
}

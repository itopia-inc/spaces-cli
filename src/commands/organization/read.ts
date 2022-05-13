import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

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

export default class organizationRead extends Command {
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
    const { flags } = this.parse(organizationRead);
    await handler({
      command: this,
      query: OrganizationReadDocument,
      variables: flags,
    });
  }
}

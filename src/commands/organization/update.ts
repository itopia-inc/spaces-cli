import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const OrganizationUpdateDocument = `
mutation organizationUpdate($id: ID!, $name: String!) {
  organizationUpdate(input: {id: $id, name: $name}) {
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

export default class organizationUpdate extends Command {
  static description = "Update an organization's name";

  static examples: string[] = [
    "spaces organization:update --id='abc123OrganizationID' --name='My Organization'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
    name: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(organizationUpdate);
    await handler({
      command: this,
      query: OrganizationUpdateDocument,
      variables: flags,
    });
  }
}

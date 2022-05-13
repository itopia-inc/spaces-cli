import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const OrganizationListDeploymentsDocument = `
query organizationListDeployments($id: ID!) {
  organization(input: {id: $id}) {
    organization {
      id
      name
      deployments {
        id
        name
      }
    }
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class organizationListDeployments extends Command {
  static description = "List all deployments in an organization";

  static examples: string[] = [
    "spaces organization:list-deployments --id='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(organizationListDeployments);
    await handler({
      command: this,
      query: OrganizationListDeploymentsDocument,
      variables: flags,
    });
  }
}

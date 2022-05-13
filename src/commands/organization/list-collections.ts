import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const OrganizationListCollectionsDocument = `
query organizationListCollections($id: ID!) {
  organization(input: {id: $id}) {
    organization {
      id
      name
      deployments {
        id
        name
        collections {
          id
          name
        }
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

export default class organizationListCollections extends Command {
  static description = "List all collections in an organization";

  static examples: string[] = [
    "spaces organization:list-collections --id='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(organizationListCollections);
    await handler({
      command: this,
      query: OrganizationListCollectionsDocument,
      variables: flags,
    });
  }
}

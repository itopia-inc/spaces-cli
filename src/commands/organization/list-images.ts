import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const OrganizationListImagesDocument = `
query organizationListImages($id: ID!) {
  organization(input: {id: $id}) {
    organization {
      id
      name
      catalogItems {
        id
        name
        description
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

export default class organizationListImages extends Command {
  static description = "List all images in an organization";

  static examples: string[] = [
    "spaces organization:list-images --id='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(organizationListImages);
    await handler({
      command: this,
      query: OrganizationListImagesDocument,
      variables: flags,
    });
  }
}

import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const CollectionListSpacesDocument = `
query collectionListSpaces($id: ID!, $deploymentId: ID!) {
  collection(input: {collectionId: $id, deploymentId: $deploymentId}) {
    collection {
      id
      name
      spaces {
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

export default class collectionListSpaces extends Command {
  static description = "List all spaces in a collection";

  static examples: string[] = [
    "spaces collection:list-spaces --id='abc123CollectionID' --deploymentId='abc123DeploymentID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
    deploymentId: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(collectionListSpaces);
    await handler({
      command: this,
      query: CollectionListSpacesDocument,
      variables: flags,
    });
  }
}

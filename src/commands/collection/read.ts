import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const CollectionReadDocument = `
query collectionRead($id: ID!, $deploymentId: ID!) {
  collection(input: {collectionId: $id, deploymentId: $deploymentId}) {
    collection {
      endUsers {
        displayName
        emailAddress
        status
      }
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

export default class collectionRead extends Command {
  static description = "Read all properties of a collection";

  static examples: string[] = [
    "spaces collection:read --id='abc123CollectionID' --deploymentId='abc123DeploymentID'",
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
    const { flags } = this.parse(collectionRead);
    await handler({
      command: this,
      query: CollectionReadDocument,
      variables: flags,
    });
  }
}

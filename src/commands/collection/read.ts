import { flags } from "@oclif/command";
import config from "../../config";

import handler from "../../graphql-query-handler";
import { CommandWithExtraLogging } from "../../logging";

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

export default class CollectionRead extends CommandWithExtraLogging {
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
    const { flags } = this.parse(CollectionRead);
    const data = await handler({
      command: this,
      query: CollectionReadDocument,
      variables: flags,
    });
    if (config.get("printResponsesPretty")) {
      this.logCollection(data?.collection?.collection);
      this.logProblem(data?.collection?.problem);
    }
  }
}

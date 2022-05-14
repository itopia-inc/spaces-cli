import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const CollectionDeleteDocument = `
mutation collectionDelete($collectionId: ID!, $deploymentId: ID!) {
  collectionDelete(
    input: {collectionId: $collectionId, deploymentId: $deploymentId}
  ) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class CollectionDelete extends Command {
  static description = "Delete a collection";

  static examples: string[] = [
    "spaces collection:delete --collectionId='abc123CollectionID' --deploymentId='abc123DeploymentID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    collectionId: flags.string({
      multiple: false,
      required: true,
    }),
    deploymentId: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(CollectionDelete);
    await handler({
      command: this,
      query: CollectionDeleteDocument,
      variables: flags,
    });
  }
}
import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const SpaceDeleteDocument = `
mutation spaceDelete($collectionId: ID!, $deploymentId: ID!, $forceShutDownAllSessions: Boolean, $spaceId: ID!) {
  spaceDelete(
    input: {collectionId: $collectionId, deploymentId: $deploymentId, forceShutDownAllSessions: $forceShutDownAllSessions, spaceId: $spaceId}
  ) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class SpaceDelete extends Command {
  static description = "Delete a space";

  static examples: string[] = [
    "spaces space:delete --collectionId='abc123CollectionID' --deploymentId='abc123DeploymentID' --forceShutDownAllSessions --spaceId='abc123SpaceID'",
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
    forceShutDownAllSessions: flags.boolean({
      // multiple: false,
      required: false,
    }),
    spaceId: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(SpaceDelete);
    await handler({
      command: this,
      query: SpaceDeleteDocument,
      variables: flags,
    });
  }
}

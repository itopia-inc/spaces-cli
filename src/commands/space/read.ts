import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const SpaceReadDocument = `
query spaceRead($id: ID!, $collectionId: ID!, $deploymentId: ID!) {
  space(
    input: {collectionId: $collectionId, deploymentId: $deploymentId, spaceId: $id}
  ) {
    space {
      catalogItem {
        id
      }
      description
      id
      launcherUrl
      name
      settings {
        dockerPersistentStorageSizeinGigabytes
        enableDocker
        enableInboundClipboardRedirection
        enableOutboundClipboardRedirection
        enablePDFPrinter
        enablePersistentHome
        inactivityTerminationDelayInMinutes
        persistentHomeSizeInGigabytes
        size
      }
      state
      stateMessage
    }
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class SpaceRead extends Command {
  static description = "Read all properties of a space";

  static examples: string[] = [
    "spaces space:read --id='abc123SpaceID' --collectionId='abc123CollectionID' --deploymentId='abc123DeploymentID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
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
    const { flags } = this.parse(SpaceRead);
    await handler({
      command: this,
      query: SpaceReadDocument,
      variables: flags,
    });
  }
}

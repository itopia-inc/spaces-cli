// Note: This file is versioned because `npm run codegen` doesn't write it well.
//       See the manually-commented-out line below, which shouldn't be written
//       because `multiple` is an invalid option for `flags.boolean()`.
import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

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

export default class spaceDelete extends Command {
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
    const { flags } = this.parse(spaceDelete);
    await handler({
      command: this,
      query: SpaceDeleteDocument,
      variables: flags,
    });
  }
}

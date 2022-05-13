import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const EndUserRemoveDocument = `
mutation endUserRemove($id: ID!, $deploymentId: ID!, $email: String!) {
  endUserDelete(
    input: {collectionId: $id, deploymentId: $deploymentId, endUserEmailAddress: $email}
  ) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class endUserRemove extends Command {
  static description =
    "Remove an end user from a collection (this revokes permission to use the collection's spaces)";

  static examples: string[] = [
    "spaces collection:remove-end-user --id='abc123CollectionID' --deploymentId='abc123DeploymentID' --emailAddress='developer@example.com'",
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
    email: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(endUserRemove);
    await handler({
      command: this,
      query: EndUserRemoveDocument,
      variables: flags,
    });
  }
}

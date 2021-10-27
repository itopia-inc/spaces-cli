// Note: This file is versioned because `npm run codegen` doesn't write it well.
//       See the manually-commented-out line below, which shouldn't be written
//       because `multiple` is an invalid option for `flags.boolean()`,
//       and the added `default` line above it.
import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const EndUserAddDocument = `
mutation endUserAdd($id: ID!, $deploymentId: ID!, $email: String!, $notify: Boolean!) {
  endUserAdd(
    input: {collectionId: $id, deploymentId: $deploymentId, doSendNotificationEmail: $notify, endUserEmailAddress: $email}
  ) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class endUserAdd extends Command {
  static description =
    "Add an end user to a collection (this grants permission to use the collection's spaces)";

  static examples: string[] = [
    "spaces collection:end-user-add --id='abc123CollectionID' --deploymentId='abc123DeploymentID' --emailAddress='developer@example.com' --notify",
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
    email: flags.string({
      multiple: false,
      required: true,
    }),
    notify: flags.boolean({
      default: false,
      // multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(endUserAdd);
    await handler({
      command: this,
      query: EndUserAddDocument,
      variables: flags,
    });
  }
}

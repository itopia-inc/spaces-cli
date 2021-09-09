// Note: This file is versioned because `npm run codegen` doesn't write it well.
//       See the manually-commented-out line below, which shouldn't be written
//       because `multiple` is an invalid option for `flags.boolean()`.
import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const DeploymentUpdateDocument = `
mutation deploymentUpdate($id: ID!, $isGoogleIdentityProviderEnabled: Boolean!, $managedStorageSizeInGigabytes: Int!, $name: String!, $organizationId: ID!) {
  deploymentUpdate(
    input: {deploymentId: $id, isGoogleIdentityProviderEnabled: $isGoogleIdentityProviderEnabled, managedStorageSizeInGigabytes: $managedStorageSizeInGigabytes, name: $name, organizationId: $organizationId}
  ) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
    query {
      deployment(input: {deploymentId: $id, organizationId: $organizationId}) {
        deployment {
          id
          isGoogleIdentityProviderEnabled
          managedStorageSizeInGigabytes
          name
        }
      }
    }
  }
}`;

export default class deploymentUpdate extends Command {
  static description = "Update one or more of a deployment's properties";

  static examples: string[] = [
    "spaces deployment:update --id='abc123OrganizationID' --isGoogleIdentityProviderEnabled --managedStorageSizeInGigabytes='200' --name='My Deployment'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
    isGoogleIdentityProviderEnabled: flags.boolean({
      // multiple: false,
      required: true,
    }),
    managedStorageSizeInGigabytes: flags.integer({
      multiple: false,
      required: true,
    }),
    name: flags.string({
      multiple: false,
      required: true,
    }),
    organizationId: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(deploymentUpdate);
    await handler({
      command: this,
      query: DeploymentUpdateDocument,
      variables: flags,
    });
  }
}

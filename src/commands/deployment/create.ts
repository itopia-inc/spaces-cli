// Note: This file is versioned because `npm run codegen` doesn't write it well.
//       See the manually-commented-out line below, which shouldn't be written
//       because `multiple` is an invalid option for `flags.boolean()`.
import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const DeploymentCreateDocument = `
mutation deploymentCreate($isGoogleIdentityProviderEnabled: Boolean!, $managedStorageSizeInGigabytes: Int!, $managedStorageTier: StorageTier!, $name: String!, $organizationId: ID!, $region: String!) {
  deploymentCreate(
    input: {isGoogleIdentityProviderEnabled: $isGoogleIdentityProviderEnabled, managedStorageSizeInGigabytes: $managedStorageSizeInGigabytes, managedStorageTier: $managedStorageTier, name: $name, organizationId: $organizationId, region: $region}
  ) {
    deploymentId
    deploymentStatus
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class deploymentCreate extends Command {
  static description = "Create a new deployment";

  static examples: string[] = [
    "spaces deployment:create --name='My Deployment' --organizationId='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    isGoogleIdentityProviderEnabled: flags.boolean({
      // multiple: false,
      required: true,
    }),
    managedStorageSizeInGigabytes: flags.integer({
      multiple: false,
      required: true,
    }),
    managedStorageTier: flags.string({
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
    region: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(deploymentCreate);
    await handler({
      command: this,
      query: DeploymentCreateDocument,
      variables: flags,
    });
  }
}

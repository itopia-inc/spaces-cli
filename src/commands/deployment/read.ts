import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const DeploymentReadDocument = `
query deploymentRead($id: ID!, $organizationId: ID!) {
  deployment(input: {deploymentId: $id, organizationId: $organizationId}) {
    deployment {
      id
      isGoogleIdentityProviderEnabled
      launcherUrl
      name
      defaultClusterConfiguration {
        location
        status
      }
    }
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class deploymentRead extends Command {
  static description = "Read all properties of a deployment";

  static examples: string[] = [
    "spaces deployment:read --id='abc123DeploymentID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
    organizationId: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(deploymentRead);
    await handler({
      command: this,
      query: DeploymentReadDocument,
      variables: flags,
    });
  }
}

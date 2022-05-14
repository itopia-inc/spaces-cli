import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const DeploymentUpdateDocument = `
mutation deploymentUpdate($id: ID!, $isGoogleIdentityProviderEnabled: Boolean!, $name: String!, $organizationId: ID!) {
  deploymentUpdate(
    input: {deploymentId: $id, isGoogleIdentityProviderEnabled: $isGoogleIdentityProviderEnabled, name: $name, organizationId: $organizationId}
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
          name
        }
      }
    }
  }
}`;

export default class DeploymentUpdate extends Command {
  static description = "Update one or more of a deployment's properties";

  static examples: string[] = [
    "spaces deployment:update --id='abc123OrganizationID' --isGoogleIdentityProviderEnabled --name='My Deployment'",
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
    const { flags } = this.parse(DeploymentUpdate);
    await handler({
      command: this,
      query: DeploymentUpdateDocument,
      variables: flags,
    });
  }
}

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const DeploymentCreateDocument = `
mutation deploymentCreate($isGoogleIdentityProviderEnabled: Boolean!, $name: String!, $organizationId: ID!, $region: String!) {
  deploymentCreate(
    input: {isGoogleIdentityProviderEnabled: $isGoogleIdentityProviderEnabled, name: $name, organizationId: $organizationId, region: $region}
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

export default class DeploymentCreate extends Command {
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
    const { flags } = this.parse(DeploymentCreate);
    await handler({
      command: this,
      query: DeploymentCreateDocument,
      variables: flags,
    });
  }
}

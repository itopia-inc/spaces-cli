import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const DeploymentDeleteDocument = `
mutation deploymentDelete($id: ID!, $organizationId: ID!) {
  deploymentDelete(input: {deploymentId: $id, organizationId: $organizationId}) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class DeploymentDelete extends Command {
  static description = "Delete a deployment";

  static examples: string[] = [
    "spaces deployment:delete --id='abc123DeploymentID' --organizationId='abc123OrganizationID'",
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
    const { flags } = this.parse(DeploymentDelete);
    await handler({
      command: this,
      query: DeploymentDeleteDocument,
      variables: flags,
    });
  }
}

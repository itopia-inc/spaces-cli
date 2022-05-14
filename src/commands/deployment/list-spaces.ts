import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const DeploymentListSpacesDocument = `
query deploymentListSpaces($id: ID!, $organizationId: ID!) {
  deployment(input: {deploymentId: $id, organizationId: $organizationId}) {
    deployment {
      id
      name
      collections {
        id
        name
        spaces {
          id
          name
        }
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

export default class DeploymentListSpaces extends Command {
  static description = "List all spaces in a deployment";

  static examples: string[] = [
    "spaces deployment:list-spaces --id='abc123DeploymentID' --organizationId='abc123OrganizationID'",
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
    const { flags } = this.parse(DeploymentListSpaces);
    await handler({
      command: this,
      query: DeploymentListSpacesDocument,
      variables: flags,
    });
  }
}

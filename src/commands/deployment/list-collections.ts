import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const DeploymentListCollectionsDocument = `
query deploymentListCollections($id: ID!, $organizationId: ID!) {
  deployment(input: {deploymentId: $id, organizationId: $organizationId}) {
    deployment {
      id
      name
      collections {
        id
        name
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

export default class DeploymentListCollections extends Command {
  static description = "List all collections in a deployment";

  static examples: string[] = [
    "spaces deployment:list-collections --id='abc123DeploymentID' --organizationId='abc123OrganizationID'",
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
    const { flags } = this.parse(DeploymentListCollections);
    await handler({
      command: this,
      query: DeploymentListCollectionsDocument,
      variables: flags,
    });
  }
}

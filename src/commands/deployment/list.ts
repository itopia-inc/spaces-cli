import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const DeploymentListDocument = `
query deploymentList {
  me {
    userAccount {
      organizations {
        id
        name
        deployments {
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

export default class DeploymentList extends Command {
  static description = "List all of your deployments";

  static examples: string[] = ["spaces deployment:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(DeploymentList);
    await handler({
      command: this,
      query: DeploymentListDocument,
      variables: flags,
    });
  }
}
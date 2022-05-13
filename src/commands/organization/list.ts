import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const OrganizationListDocument = `
query organizationList {
  me {
    userAccount {
      organizations {
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

export default class OrganizationList extends Command {
  static description = "List all of your organizations";

  static examples: string[] = ["spaces organization:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(OrganizationList);
    await handler({
      command: this,
      query: OrganizationListDocument,
      variables: flags,
    });
  }
}

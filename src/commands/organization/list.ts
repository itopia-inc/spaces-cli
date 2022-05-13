import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

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

export default class organizationList extends Command {
  static description = "List all of your organizations";

  static examples: string[] = ["spaces organization:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(organizationList);
    await handler({
      command: this,
      query: OrganizationListDocument,
      variables: flags,
    });
  }
}

import { flags } from "@oclif/command";

import config from "../../config";
import handler from "../../graphql-query-handler";
import { CommandWithExtraLogging } from "../../logging";

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

export default class OrganizationList extends CommandWithExtraLogging {
  static description = "List all of your organizations";

  static examples: string[] = ["spaces organization:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(OrganizationList);
    const data = await handler({
      command: this,
      query: OrganizationListDocument,
      variables: flags,
    });
    if (config.get("printResponsesPretty")) {
      this.table(data?.me?.userAccount?.organizations);
      this.logProblem(data?.me?.problem);
    }
  }
}

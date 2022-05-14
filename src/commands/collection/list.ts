import { flags } from "@oclif/command";

import config from "../../config";
import handler from "../../graphql-query-handler";
import { CommandWithExtraLogging } from "../../logging";

const CollectionListDocument = `
query collectionList {
  me {
    userAccount {
      organizations {
        id
        name
        deployments {
          id
          name
          collections {
            id
            name
          }
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

export default class CollectionList extends CommandWithExtraLogging {
  static description = "List all of your collections";

  static examples: string[] = ["spaces collection:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(CollectionList);
    const data = await handler({
      command: this,
      query: CollectionListDocument,
      variables: flags,
    });
    if (config.get("printResponsesPretty")) {
      const organizations = data?.me?.userAccount?.organizations || [];
      organizations.forEach((organization: any) => {
        this.logOrganizationCollections(organization);
      });
      this.logProblem(data?.me?.problem);
    }
  }
}

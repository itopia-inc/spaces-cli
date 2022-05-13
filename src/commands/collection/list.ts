import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

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

export default class CollectionList extends Command {
  static description = "List all of your collections";

  static examples: string[] = ["spaces collection:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(CollectionList);
    await handler({
      command: this,
      query: CollectionListDocument,
      variables: flags,
    });
  }
}

import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

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

export default class collectionList extends Command {
  static description = "List all of your collections";

  static examples: string[] = ["spaces collection:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(collectionList);
    await handler({
      command: this,
      query: CollectionListDocument,
      variables: flags,
    });
  }
}

import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const ImageListDocument = `
query imageList {
  me {
    userAccount {
      organizations {
        id
        name
        catalogItems {
          id
          name
          description
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

export default class imageList extends Command {
  static description = "List all of your images";

  static examples: string[] = ["spaces image:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(imageList);
    await handler({
      command: this,
      query: ImageListDocument,
      variables: flags,
    });
  }
}

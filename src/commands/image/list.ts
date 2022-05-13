import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

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

export default class ImageList extends Command {
  static description = "List all of your images";

  static examples: string[] = ["spaces image:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(ImageList);
    await handler({
      command: this,
      query: ImageListDocument,
      variables: flags,
    });
  }
}

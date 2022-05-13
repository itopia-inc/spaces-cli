import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const SpaceListDocument = `
query spaceList {
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
            spaces {
              id
              name
            }
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

export default class SpaceList extends Command {
  static description = "List all of your spaces";

  static examples: string[] = ["spaces space:list"];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { flags } = this.parse(SpaceList);
    await handler({
      command: this,
      query: SpaceListDocument,
      variables: flags,
    });
  }
}

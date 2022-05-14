import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const OrganizationListSpacesDocument = `
query organizationListSpaces($id: ID!) {
  organization(input: {id: $id}) {
    organization {
      id
      name
      deployments {
        id
        name
        collections {
          spaces {
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

export default class OrganizationListSpaces extends Command {
  static description = "List all spaces in an organization";

  static examples: string[] = [
    "spaces organization:list-spaces --id='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(OrganizationListSpaces);
    await handler({
      command: this,
      query: OrganizationListSpacesDocument,
      variables: flags,
    });
  }
}
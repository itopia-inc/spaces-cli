import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const OrganizationReadDocument = `
query organizationRead($id: ID!) {
  organization(input: {id: $id}) {
    organization {
      id
      name
    }
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class OrganizationRead extends Command {
  static description = "Read all properties of an organization";

  static examples: string[] = [
    "spaces organization:read --id='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(OrganizationRead);
    await handler({
      command: this,
      query: OrganizationReadDocument,
      variables: flags,
    });
  }
}

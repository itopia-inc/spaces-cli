import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const OrganizationDeleteDocument = `
mutation organizationDelete($id: ID!) {
  organizationDelete(input: {id: $id}) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class OrganizationDelete extends Command {
  static description = "Delete an organization";

  static examples: string[] = [
    "spaces organization:delete --id='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(OrganizationDelete);
    await handler({
      command: this,
      query: OrganizationDeleteDocument,
      variables: flags,
    });
  }
}

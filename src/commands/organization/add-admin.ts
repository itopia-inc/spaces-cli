import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const OrganizationAddAdministratorDocument = `
mutation organizationAddAdministrator($id: ID!, $email: String!) {
  editOrganizationUserAccount(
    input: {email: $email, organizationId: $id, roles: ["organization_owner"]}
  ) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class OrganizationAddAdministrator extends Command {
  static description =
    "Add someone to an organization's list of administrators";

  static examples: string[] = [
    "spaces organization:add-admin --id='abc123OrganizationID' --email='someone@example.com'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
    email: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(OrganizationAddAdministrator);
    await handler({
      command: this,
      query: OrganizationAddAdministratorDocument,
      variables: flags,
    });
  }
}

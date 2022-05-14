import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const OrganizationRemoveAdministratorDocument = `
mutation organizationRemoveAdministrator($id: ID!, $email: String!) {
  removeOrganizationUserAccount(
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

export default class OrganizationRemoveAdministrator extends Command {
  static description =
    "Remove someone from an organization's list of administrators";

  static examples: string[] = [
    "spaces organization:remove-admin --id='abc123OrganizationID' --email='someone@example.com'",
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
    const { flags } = this.parse(OrganizationRemoveAdministrator);
    await handler({
      command: this,
      query: OrganizationRemoveAdministratorDocument,
      variables: flags,
    });
  }
}
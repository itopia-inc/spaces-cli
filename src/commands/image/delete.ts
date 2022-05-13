import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const ImageDeleteDocument = `
mutation imageDelete($id: String!, $organizationId: String!) {
  catalogItemDelete(input: {catalogItemId: $id, organizationId: $organizationId}) {
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class ImageDelete extends Command {
  static description = "Delete an image";

  static examples: string[] = [
    "spaces image:delete --id='abc123ImageID' --organizationId='abc123OrganizationID'",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
    organizationId: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(ImageDelete);
    await handler({
      command: this,
      query: ImageDeleteDocument,
      variables: flags,
    });
  }
}

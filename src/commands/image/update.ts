import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const ImageUpdateDocument = `
mutation imageUpdate($id: String!, $description: String, $icon: String, $isPublic: Boolean, $organizationId: String!, $status: CatalogItemStatus) {
  catalogItemUpdate(
    input: {catalogItemId: $id, description: $description, icon: $icon, isPublic: $isPublic, organizationId: $organizationId, status: $status}
  ) {
    catalogItem {
      description
      id
      isPublic
      name
      status
    }
    problem {
      ... on Problem {
        __typename
        message
      }
    }
  }
}`;

export default class imageUpdate extends Command {
  static description = "Update an image's properties";

  static examples: string[] = [
    "spaces image:update --id='abc123ImageID' --description='This is a very good image.' --icon='base64imagecontent' --organizationId='abc123OrganizationID' --status=LIVE",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({
      multiple: false,
      required: true,
    }),
    description: flags.string({
      multiple: false,
      required: false,
    }),
    icon: flags.string({
      multiple: false,
      required: false,
    }),
    isPublic: flags.boolean({
      // multiple: false,
      required: false,
    }),
    organizationId: flags.string({
      multiple: false,
      required: true,
    }),
    status: flags.string({
      multiple: false,
      required: false,
    }),
  };

  async run() {
    const { flags } = this.parse(imageUpdate);
    await handler({
      command: this,
      query: ImageUpdateDocument,
      variables: flags,
    });
  }
}

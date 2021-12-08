import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";

const ImageCreateDocument = `
mutation imageCreate($description: String!, $icon: String!, $imageRepositoryUrl: String!, $imageTag: String!, $name: String!, $organizationId: String!, $recommendedContainerSize: SpaceSize!, $recommendedDockerPersistentStorageSizeInGigabytes: Int!, $recommendedEnableDocker: Boolean!, $recommendedEnableInboundClipboardRedirection: Boolean!, $recommendedEnableOutboundClipboardRedirection: Boolean!, $recommendedEnablePdfPrinter: Boolean!, $recommendedEnablePersistentHome: Boolean!, $recommendedInactivityTerminationDelayInMinutes: Int!, $recommendedPersistentHomeSizeInGigabytes: Int!, $status: CatalogItemStatus!) {
  catalogItemCreate(
    input: {description: $description, icon: $icon, imageRepositoryUrl: $imageRepositoryUrl, imageTag: $imageTag, name: $name, organizationId: $organizationId, recommendedSettings: {dockerPersistentStorageSizeinGigabytes: $recommendedDockerPersistentStorageSizeInGigabytes, enableDocker: $recommendedEnableDocker, enableInboundClipboardRedirection: $recommendedEnableInboundClipboardRedirection, enableOutboundClipboardRedirection: $recommendedEnableOutboundClipboardRedirection, enablePDFPrinter: $recommendedEnablePdfPrinter, enablePersistentHome: $recommendedEnablePersistentHome, inactivityTerminationDelayInMinutes: $recommendedInactivityTerminationDelayInMinutes, persistentHomeSizeInGigabytes: $recommendedPersistentHomeSizeInGigabytes, size: $recommendedContainerSize}, status: $status}
  ) {
    catalogItem {
      description
      id
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

export default class imageCreate extends Command {
  static description = "Create a new image";

  static examples: string[] = [
    "spaces image:create --description='This is a very good image.' --icon='base64imagecontent' --imageRepositoryUrl='https://my.registry.com/my/image' --imageTag='my.version' --organizationId='abc123OrganizationID' --status=LIVE",
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    description: flags.string({
      multiple: false,
      required: true,
    }),
    icon: flags.string({
      multiple: false,
      required: true,
    }),
    imageRepositoryUrl: flags.string({
      multiple: false,
      required: true,
    }),
    imageTag: flags.string({
      multiple: false,
      required: true,
    }),
    name: flags.string({
      multiple: false,
      required: true,
    }),
    organizationId: flags.string({
      multiple: false,
      required: true,
    }),
    recommendedContainerSize: flags.string({
      multiple: false,
      required: true,
    }),
    recommendedDockerPersistentStorageSizeInGigabytes: flags.integer({
      multiple: false,
      required: true,
    }),
    recommendedEnableDocker: flags.boolean({
      // multiple: false,
      required: false,
    }),
    recommendedEnableInboundClipboardRedirection: flags.boolean({
      // multiple: false,
      required: false,
    }),
    recommendedEnableOutboundClipboardRedirection: flags.boolean({
      // multiple: false,
      required: false,
    }),
    recommendedEnablePdfPrinter: flags.boolean({
      // multiple: false,
      required: false,
    }),
    recommendedEnablePersistentHome: flags.boolean({
      // multiple: false,
      required: false,
    }),
    recommendedInactivityTerminationDelayInMinutes: flags.integer({
      multiple: false,
      required: true,
    }),
    recommendedPersistentHomeSizeInGigabytes: flags.integer({
      multiple: false,
      required: true,
    }),
    status: flags.string({
      multiple: false,
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(imageCreate);
    await handler({
      command: this,
      query: ImageCreateDocument,
      variables: flags,
    });
  }
}

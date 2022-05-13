import * as Types from "../../graphql-types";

import { Command, flags } from "@oclif/command";
import handler from "../../graphql-query-handler";
import gql from "graphql-tag";

const ImageReadDocument = `
query imageRead($id: ID!, $organizationId: ID!) {
  catalogItem(input: {catalogItemId: $id, organizationId: $organizationId}) {
    catalogItem {
      id
      description
      imageRepositoryUrl
      imageTag
      name
      status
      recommendedSettings {
        dockerPersistentStorageSizeinGigabytes
        enableDocker
        enableInboundClipboardRedirection
        enableOutboundClipboardRedirection
        enablePDFPrinter
        enablePersistentHome
        inactivityTerminationDelayInMinutes
        persistentHomeSizeInGigabytes
        size
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

export default class imageRead extends Command {
  static description = "Read all properties of an image";

  static examples: string[] = [
    "spaces image:read --id='abc123ImageID' --organizationId='abc123OrganizationID'",
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
    const { flags } = this.parse(imageRead);
    await handler({
      command: this,
      query: ImageReadDocument,
      variables: flags,
    });
  }
}

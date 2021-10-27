import * as util from "util";

import { Command } from "@oclif/command";
import { GraphQLClient } from "graphql-request";

import config from "./config";

const API_URL = "https://api.spaces.itopia.com";

interface QueryHandlerProps {
  command: Command;
  query: string;
  variables?: Record<string, any>;
}

const client = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${config.get("token")}`,
    "User-Agent": "spaces-cli",
  },
});

const handler = async ({ command, query, variables }: QueryHandlerProps) => {
  try {
    const response = await client.request(query, variables);
    const output = util.inspect(response, { depth: null });
    if (output.indexOf("AuthenticationRequiredProblem") > -1) {
      command.log(
        "\nIt looks like your authentication token is expired/missing/invalid. Try running the following:\n\n    $ spaces login\n"
      );
    } else {
      command.log(output);
    }
  } catch (error) {
    command.error(error);
  }
};

export default handler;

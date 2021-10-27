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
    command.log(util.inspect(response, { depth: null }));
  } catch (error) {
    command.error(error);
  }
};

export default handler;

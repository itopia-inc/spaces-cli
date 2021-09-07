import { Command } from "@oclif/command";
import { GraphQLClient } from "graphql-request";

const API_URL = "https://api.spaces.itopia.com";

interface QueryHandlerProps {
  command: Command;
  query: string;
  variables?: Record<string, any>;
}

const client = new GraphQLClient(API_URL);

const handler = ({ command, query, variables }: QueryHandlerProps) => {
  return client
    .request(query, variables)
    .then(command.log)
    .catch(command.error);
};

export default handler;

import Conf from "conf/dist/source";

export default new Conf<{
  printResponsesPretty: boolean;
  printResponsesRaw: boolean;
  token: string;
}>({
  projectSuffix: "",
  schema: {
    printResponsesPretty: {
      default: true,
      description:
        "Whether to print API query responses in a human-readable tables+text format",
      type: "boolean",
    },
    printResponsesRaw: {
      default: true,
      description:
        "Whether to print responses in a machine-readable JSON format (the raw API response data)",
      type: "boolean",
    },
    token: {
      default: "",
      description: "An authentication token for the itopia Spaces API",
      type: "string",
    },
  },
});

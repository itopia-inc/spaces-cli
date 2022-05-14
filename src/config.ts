import Conf from "conf/dist/source";

export default new Conf<{ token: string }>({
  projectSuffix: "",
  schema: {
    token: {
      default: "",
      description: "An authentication token for the itopia Spaces API",
      type: "string",
    },
  },
});

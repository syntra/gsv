import { CLIError } from "../types";

interface ErrorList {
  new: {
    blog: {
      [key: string]: (...args: any[]) => CLIError;
    };
  };
}

const errors: ErrorList = {
  new: {
    blog: {
      no_path: () => ({
        message: "Path is required",
        exit: 100,
      }),
    },
  },
};

export default errors;

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
      invalid_starter: starter => ({
        message: `"${starter}" is not a valid starter.`,
        exit: 101,
      }),
    },
  },
};

export default errors;

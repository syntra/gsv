import { writeFile } from "fs";
import YAML from "yaml";

import { GSVRC } from "../../types";

import exists from "./exists";

const write = async (config: GSVRC, force?: boolean): Promise<Error | any> => {
  if ((await exists()) && !force) {
    return new Promise((_, reject) =>
      reject(".gsvrc already exists. Use -f to override,")
    );
  }
  return new Promise(resolve => {
    writeFile(".gsvrc", YAML.stringify(config), resolve);
  });
};

export default write;

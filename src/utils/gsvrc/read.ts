import { readFile } from "fs";
import YAML from "yaml";

import { GSVRC } from "../../types";

const read = async (): Promise<Error | any | GSVRC> => {
  return new Promise((resolve, reject) => {
    readFile(
      ".gsvrc",
      (err, data) => (err ? reject(err) : resolve(YAML.parse(data.toString())))
    );
  });
};

export default read;

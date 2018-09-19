import { stat } from "fs";

const exists = async (): Promise<Error | any> =>
  new Promise(resolve =>
    stat(".gsvrc", (err: Error) => {
      if (err) resolve(false);
      resolve(true);
    })
  );

export default exists;

let spawn = require("child_process").spawn;

/**
 * Clones a remote git repository
 *
 * Based on: https://github.com/jaz303/git-clone
 *
 * @param repo valid https git url
 * @param targetPath destination path for the cloned repo
 * @param opts git clone options
 * @param opts.git path to git binary
 * @param opts.shallow when true, clone with depth 1
 * @param opts.checkout: revision/branch/tag to check out
 */
const clone = async (
  repo: string,
  targetPath: string,
  opts: {
    log?: any;
    git?: string;
    shallow?: boolean;
    checkout?: boolean;
  } = {}
) => {
  const git = opts.git || "git";
  // tslint:disable-next-line no-console
  const log = opts.log || console.log;
  const args = ["clone"];

  if (opts.shallow) {
    args.push("--depth");
    args.push("1");
  }

  // args.push("--progress");
  args.push("--");
  args.push(repo);
  args.push(targetPath);

  // TODO: move out of clone function
  function _checkout() {
    const args = ["checkout", opts.checkout];
    const process = spawn(git, args, { cwd: targetPath });
    process.on("close", function(status: number) {
      if (status === 0) {
        // callback && callback();
      } else {
        throw new Error("'git checkout' failed with status " + status);
      }
    });
  }

  // spawn a new git clone process
  const cloneProcess = spawn(git, args);

  // writes data to the set logger
  const out = (data: Buffer) => log(data.toString());

  // stream output to stdout
  cloneProcess.stdout.on("data", out);
  cloneProcess.stderr.on("data", out);

  return new Promise(resolve => {
    cloneProcess.on("close", (status: number) => {
      if (status === 0) {
        if (opts.checkout) {
          _checkout();
        } else {
          resolve();
        }
      } else {
        throw new Error("'git clone' failed with status " + status);
      }
    });
  });
};

export default { clone };

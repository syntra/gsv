const parser = require("iniparser");
const path = require("path");

interface Config {
  user: { email: string; name: string };
}

const config = async (): Promise<Config | any> => {
  const gitConfigPath = path.join(
    process.env.HOME || process.env.USERPROFILE,
    ".gitconfig"
  );
  return new Promise(resolve => resolve(parser.parseSync(gitConfigPath)));
};

export default config;

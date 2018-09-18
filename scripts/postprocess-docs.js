const replace = require("replace-in-file");

const options = {
  files: "README.md",
  from: /Command Topics/g,
  to: "🔨 Command Topics",
};

const main = async () => {
  try {
    const changes = await replace(options);
    console.log("Modified files:", changes.join(", "));
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

main();

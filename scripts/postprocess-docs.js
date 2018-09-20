const replace = require("replace-in-file");

const options = {
  files: "README.md",
  from: [/Command Topics/g, /#command-topics/g, "<!-- commands -->"],
  to: ["🔨 Command Topics", "#-command-topics", "<!-- commands -->\n"],
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

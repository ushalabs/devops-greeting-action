const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-greet");
  const greeting = `Hello, ${name}!`;

  core.info(greeting);
  core.info(`Triggered by: ${github.context.actor}`);

  core.setOutput("greeting", greeting);
} catch (error) {
  core.setFailed(error.message);
}
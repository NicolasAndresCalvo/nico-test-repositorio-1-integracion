const core = require('@actions/core');

try {
  // Get the input 'message' from the action's metadata file
  const message = core.getInput('message');

  // Log the message to the console
  console.log(`Message: ${message}`);

  // Set the output parameter 'echo-output' to the same message
  core.setOutput('echo-output', message);

} catch (error) {
  // If there's an error, fail the action
  core.setFailed(error.message);
}
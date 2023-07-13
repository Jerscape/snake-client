//imports
const {commands, messages} = require("./constants")

let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //is this in the right place?
  return stdin;
}

const handleUserInput = function (key) {

  let commandKeys = Object.keys(commands)

  if (key === '\u0003') {
    process.exit();
 
  } else if (commandKeys.includes(key)) {
    let list = commands[key]
    console.log(list[0]);
    connection.write(list[1])

  } else {
    connection.write(messages[key])
  }

}

module.exports = {
  setupInput

}
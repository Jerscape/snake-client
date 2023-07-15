//imports
const {commands, messages} = require("./constants");

let connection;

//setup input function
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//user input function. It processes input based on pre-defined keys
//w(up), s(down), a(left), d(right), and message keys z, x, c (see messages object on constants.js)
const handleUserInput = function(key) {

  //see commands object in constants module for further reference
  let commandKeys = Object.keys(commands);

  if (key === '\u0003') {
    process.exit();
 
  } else if (commandKeys.includes(key)) {
    let list = commands[key];

    //this console log is to provide assurance to the user, by confirming what key they have pressed
    console.log(list[0]);
    connection.write(list[1]);

  } else {
    connection.write(messages[key]);
  }

};

//exports
module.exports = {
  setupInput

};
//imports
const {commands} = require("./constants")

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
  if (key === '\u0003') {
    process.exit();
  }

  //if key is w
  if(key === '\u0077'){
    console.log("w")
    connection.write("Move: up")

  //if key is a
  } else if(key === "\u0061") {
    console.log("a")
    connection.write("Move: left")
  //if key is d
  } else if (key === "\u0064") {
    console.log("d")
    connection.write("Move: right")
  //if key is s
  } else if(key === "\u0073") {
    console.log("s")
    connection.write("Move: down")
  
    //special message keys
    //z "no snakes in Ireland"
  } else if (key === "\u007A") {
    connection.write("Say: No snakes in Ireland!")
    //if key is x
  } else if (key === '\u0078'){
    connection.write("Say: Don't eat your tail!")
  } else if (key === '\u0063'){
    connection.write("Say: Is it snake or snek?")
  }


  // let keyPressed = key
  // //should I have made the keys the keys?
  // let commandObj = {
  //   w: '\u0077',
  //   a: '\u0061',
  //   s: '\u0073',
  //   d: '\u0064'

  // }

  // for(let item in commandObj){
  //   if(keyPressed === commandObj[item]){
  //     //console.log(item)
  //     connection.write(commandObj[item])
  //   }

  // }

}

module.exports = {
  setupInput

}
//did I put this in the right place or should it before connect?

let connection = "";

const setupInput = function () {
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

  let keyPressed = key
  //should I have made the keys the keys?
  let commandObj = {
    w: '\u0077',
    a: '\u0061',
    s: '\u0073',
    d: '\u0064'

  }

  for(let item in commandObj){
    if(keyPressed === commandObj[item]){
      console.log(item)
    }

  }

}

module.exports = {
  setupInput

}
//required imports
const net = require("net");
const {IP, PORT} = require("./constants");
 

//connectoin function; establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });


  conn.on("data", (data) =>{
    console.log(data);
  });

  //assures client that the connection to game server is successful
  //and prompts them to play by listing available keys and their function
  conn.on("connect", () => {
    console.log("Sucessfully connected to game server\n");
    console.log("Hit the following keys to move snake. \n");
    console.log('w (up), s (down), a (right), d (left)\n');
    console.log('To reveal special messages, hit z, x, or c\n-----------');
    conn.write("Name: JD");
    

  });


  conn.setEncoding("utf8");

  //returns connection
  return conn;
};


//exports
module.exports = {
  connect
};
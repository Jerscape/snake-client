const net = require("net");
const { stdout } = require("process");
const {IP, PORT} = require("./constants")
 

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT, //JN - I got this from the error message when I first tried running under port 3000, it seems to work
  });


  conn.on("data", (data) =>{
    console.log(data)
  })

  conn.on("connect", () => {
    console.log("Sucessfully connected to game server")
    conn.write("Name: JD")
    

  })


  
  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};



module.exports = {
  connect
};
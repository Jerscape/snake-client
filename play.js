
const {connect} = require('./client');
const {setupInput} = require("./input")

console.log("Connecting ...");
let connObject = connect();

setupInput(connObject);
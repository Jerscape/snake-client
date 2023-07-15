const IP = "localhost";
const PORT = 50541;

//commands object
const commands = {
  '\u0077': ["w", "Move: up"], //w
  '\u0061': ["a","Move: left"], //a
  '\u0073': ["s", "Move: down"], //s
  '\u0064': ["d", "Move: right"], //d


};

//messages object
const messages = {
  '\u007A': "Say: No snakes in Ireland!",//z
  '\u0078': "Say: Don't eat your tail!", //x
  '\u0063': "Say: Is it snake or snek?", //c
};

//exports
module.exports = {
  IP,
  PORT,
  commands,
  messages,
};
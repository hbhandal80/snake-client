const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542, 
  });

  // verify once connected to server
  conn.on('connect', (data) => {
    console.log("Successfully connected to game server");
    conn.write('Name: HKB', () => {
    });
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // message if idle
  conn.on('data', (data) => {
    console.log("You ded cuz you idled");
  });

  return conn;
};

module.exports = { connect };

/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/
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

  // message if idle
  conn.on('data', (data) => {
    console.log("You ded cuz you idled");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
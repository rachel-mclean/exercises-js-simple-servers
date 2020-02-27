let net = require('net');
let madlibsMain = require('./madlibs-main');
let fs = require('fs');
let serverLog = require('./lib/serverLog');
let SERVER_PORT = 2005;

function madLibs(clientData) {

}

function prompt(connection, index) {
  connection.write('> ');
}

let server = net.createServer(function(connection) {
  let clientAddress = connection.remoteAddress;
  connection.write('Are you ready to start your MadLibs game? Type YES when ready: ');
  madlibs()
  serverLog('CONNECT', `Client at ${clientAddress} connected`);

  // doesn't do anything except prompts user that they can type something
  prompt(connection);

  // This tells Node what to do whenever we receive data over this connection.
  // The clientData argument contains whatever data the client sent to us.
  connection.on('data', function(clientData) {
    let args = clientData.toString().trimRight().split(' ');

    // either "GET" or "LIST"
    let command = args[0];

    if (command === 'GET') {
      let fileName = args[1];
      let filePath = `./files/${fileName}`;

      if (fs.existsSync(filePath)) {
        let fileContents = fs.readFileSync(filePath, 'utf-8');

        connection.write(fileContents);
      } else {
        connection.write(`[ERROR] No such file: '${fileName}'\n`);
      }
    } else if (command === 'LIST') {
      let fileNames = fs.readdirSync('./files');

      for (let fileName of fileNames) {
        connection.write(`${fileName}\n`);
      }
    } else {
      connection.write(`[ERROR] Unknown command: ${command}`);
    }

    prompt(connection);
    // connection.end();
    // connection.destroy();
  });

  connection.on('end', function() {
    serverLog('DISCONNET', `Client ${clientAddress} disconnected`);
  });
});

server.listen(SERVER_PORT, function() {
  serverLog('LISTENING', `Document server listening on port ${SERVER_PORT}`);
});

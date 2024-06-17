const webSocketsServerPort = process.env.PORT || 8000;
const webSocketServer = require("websocket").server;
const http = require("http");
const database = require("./database");
database();

const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
    httpServer: server,
});

const clients = {};

const getUniqueID = () => {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    return s4() + s4() + "-" + s4();
};

wsServer.on("request", function (request) {
    var userID = getUniqueID();
    console.log(
        " Recieved a new connection from origin " + request.origin + "."
    );
    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log(
        "connected: " + userID + " in " + Object.getOwnPropertyNames(clients)
    );

    connection.on("message", function (raw) {
        var message = JSON.parse(raw.utf8Data);
        console.log("Message: " + message);
    });
    connection.on("close", function (connection) {
        console.log(" Peer " + userID + " disconnected.");
        delete clients[userID];
    });
});

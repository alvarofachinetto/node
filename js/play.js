const http = require('http');


http.createServer((req, res) => {
    res._write()
})
.on('upgrade', (req, socket, head) => {
    socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
    'Upgrade: WebSocket\r\n' +
    'Connection: Upgrade\r\n' +
    '\r\n');
    socket.pipe(socket);
})
.listen(3000, 'localhost');


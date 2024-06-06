import http from 'http'


//Server Yaratish

const server = http.createServer((req, res) => {
    // res.statusCode = 404
    // res.statusMessage = "Not Found"
    // res.end()
    res.writeHead(202,'Good',{"Content-Type": 'text/html'})
    res.write("<h1>Hello Node Js</h1>")
})
// 8000 portga Serverni ishga tushirish
server.listen(8000, ()=> console.log('server ishga tushdi'))

//Upgrade

    //Har safar server so'rovga yangilanish bilan javob berganida chiqariladi.
    // Agar ushbu hodisa tinglanmasa va javob holati kodi 101 Kommutatsiya
    // protokollari bo'lsa,yangilanish sarlavhasini olgan mijozlar ulanishlari yopiladi.

// import http from 'node:http';
// import process from 'node:process';
//
// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('okay');
// });
// server.on('upgrade', (req, socket, head) => {
//     socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
//         'Upgrade: WebSocket\r\n' +
//         'Connection: Upgrade\r\n' +
//         '\r\n');
//
//     socket.pipe(socket); // echo back
// });
//
// // Now that server is running
// server.listen(1337, '127.0.0.1', () => {
//
//     // make a request
//     const options = {
//         port: 1337,
//         host: '127.0.0.1',
//         headers: {
//             'Connection': 'Upgrade',
//             'Upgrade': 'websocket',
//         },
//     };
//
//     const req = http.request(options);
//     req.end();
//
//     req.on('upgrade', (res, socket, upgradeHead) => {
//         console.log('got upgraded!');
//         socket.end();
//         process.exit(0);
//     });
// });

//Get getHeader(name)

        //Reads out a header on the request. The name is case-insensitive. The type of the
        // return value depends on the arguments provided to request.setHeader().

// request.setHeader('content-type', 'text/html');
// request.setHeader('Content-Length', Buffer.byteLength(body));
// request.setHeader('Cookie', ['type=ninja', 'language=javascript']);
// const contentType = request.getHeader('Content-Type');
// // 'contentType' is 'text/html'
// const contentLength = request.getHeader('Content-Length');
// // 'contentLength' is of type number
// const cookie = request.getHeader('Cookie');
// // 'cookie' is of type string[]

//request.reusedSocket

    //So'rovni tirik saqlash yoqilgan agent orqali yuborayotganda,
    // asosiy rozetkadan qayta foydalanish mumkin. Ammo agar
    //server noxush vaqtda ulanishni yopsa, mijoz "ECONNRESET"
    // xatosiga duch kelishi mumkin.


// import http from 'node:http';
//
// // Server has a 5 seconds keep-alive timeout by default
// http
//     .createServer((req, res) => {
//         res.write('hello\n');
//         res.end();
//     })
//     .listen(3000);
//
// setInterval(() => {
//     // Adapting a keep-alive agent
//     http.get('http://localhost:3000', { agent }, (res) => {
//         res.on('data', (data) => {
//             // Do nothing
//         });
//     });
// }, 5000); // Sending request on 5s interval so it's easy to hit idle timeout





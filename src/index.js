"use strict";
// import * as http from "http";
// import { exec } from 'child_process';
Object.defineProperty(exports, "__esModule", { value: true });
// const RES_SERVER_URL = "192.168.87.67"
// http
//     .createServer(function(req, res) {
//         if(req.method == "GET") {
//             res.statusCode = 102;
//         } else {
//             res.statusCode = 418;
//         }
//         res.end();
// }).listen(8888)
var http_1 = require("http");
var port = 5050;
var server = (0, http_1.createServer)(function (request, response) {
    response.write("Hello, World!");
    response.end();
});
server.listen(port);
// getAuth();
//
// function getAuth() {
//     const res = new ;
//     res.open("POST", RES_SERVER_URL);
//     res.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//     exec('.\\RPA\\start-GetAuthKey.html');
//     console.log("hello")
// }

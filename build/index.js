"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var child_process_1 = require("child_process");
var fs = __importStar(require("fs"));
var port = 5050;
var server = (0, http_1.createServer)(function (req, res) {
    res.setHeader("Content-Type", "application/json; charset=UTF-8");
    try {
        res.write(getAuth());
    }
    catch (e) {
        res.statusCode = 500;
        if (e instanceof Error) {
            res.write("{" + e.message + "}");
        }
        else {
            res.write("Uh oh, something went wrong, let Bear know to fix this");
        }
    }
    res.end();
});
server.listen(port);
function getAuth() {
    console.log("running-script");
    (0, child_process_1.execSync)('.\\RPA\\start-GetAuthKey.html');
    var path = "";
    var files = fs.readdirSync(".\\");
    files.forEach(function (file) {
        console.log(file);
        if (file.startsWith("disneyworld")) {
            path = file;
        }
    });
    var res = fs.readFileSync(path, 'utf-8');
    fs.unlinkSync(path);
    return res;
}

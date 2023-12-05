import { createServer } from 'http'
import { execSync } from 'child_process';
import * as fs from 'fs';

const port: number = 5050

const server = createServer((req, res) => {
    res.setHeader("Content-Type", "application/json; charset=UTF-8");
    try {
        res.write(getAuth());
    } catch (e) {
        res.statusCode = 500;
        if(e instanceof Error) {
            res.write("{" + e.message + "}");
        } else {
            res.write("Uh oh, something went wrong, let Bear know to fix this")
        }
    }
    res.end();
});

server.listen(port)

function getAuth(): string {
    console.log("running-script");
    execSync('.\\RPA\\start-GetAuthKey.html');
    let path = "";
    let files = fs.readdirSync(".\\");
    files.forEach(file => {
        console.log(file);
        if(file.startsWith("disneyworld")) {
            path = file;
        }
    });

    let res = fs.readFileSync(path, 'utf-8');
    fs.unlinkSync(path);
    return res;
}
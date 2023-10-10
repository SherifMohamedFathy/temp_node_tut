// const names = require("./names");
// const sayHi = require("./utlis");
// const data = require("./alternative");
// require("./mind-grid");
// sayHi("sherif");
// sayHi(names.john);
// sayHi(names.peter);
// console.log(data);

// const os = require("os");
// const user = os.userInfo();
// console.log(user);
// console.log(os.uptime());
// let currentOs = {
//   type: os.type(),
//   release: os.release(),
//   totalMemory: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOs);

// let path = require("path");
// let filePath = path.join("/content/", "test.txt");
// console.log(path.sep);
// console.log(filePath);
// let base = path.basename(filePath);
// console.log(base);
// let absolute = path.resolve(__dirname, "content", "test.txt");
// console.log(absolute);
// const { readFileSync, writeFileSync } = require("fs");
// let first = readFileSync("content/first.txt", "utf-8");
// let second = readFileSync("./content/second.txt", "utf-8");
// console.log(first, second);
// writeFileSync("content/result.txt", `hello how are you ${first},${second}`, { flag: "a" });
// const { readFile, writeFile } = require("fs");
// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });
// let http = require("http");
// let server = http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.end("welcome to our page");
//   }
//   if (req.url == '/about') {
//     res.end("here is our here history");
//   }

//   res.end(`
//   <h2>Oops!!</h2>
//   <p>we can't find it</p>
//   <a href='/'>back home</a>
//   `);
// });
// server.listen(5000);
const _ = require('lodash');

let item = [1,[2,[3,[4]]]];

let newItem = _.flattenDeep(item);
console.log(newItem);
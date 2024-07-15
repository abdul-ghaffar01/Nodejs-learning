
const fs = require("fs");
const text = fs.readFileSync("./files/intro.txt", 'utf-8');
console.log(text);

const writeText = "My name is Abdul Ghaffar and I am going to create a platform";
fs.writeFileSync("./files/output.txt", writeText);
console.log(fs.readFileSync("./files/output.txt", 'utf-8'))
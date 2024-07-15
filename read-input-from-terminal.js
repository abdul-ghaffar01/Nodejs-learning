const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("What's you name: ", (answer)=>{
    console.log("Your name is ", answer);
    rl.close();
})

rl.on('close', ()=>{
    console.log("Application closed");
})

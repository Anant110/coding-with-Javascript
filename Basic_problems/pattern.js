const prompt = require("prompt-sync")();
var n=parseInt(prompt("Enter the number"));

const pattern=((n)=>{
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write("*");
        }
        console.log();
    }
})

pattern(n);
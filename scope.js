// local scope
function create(){
    var b=89;
    console.log(b); //89
}
console.log(b); //error


// global scope
var a=90;
function create1(){
    console.log(a);//output:90
}
console.log(a);//output:90
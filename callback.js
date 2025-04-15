// setTimeout(function () {
//     console.log("Timer")
// },5000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })


//callback function
function add(x,y){
    return x+y;
}

function display(a,b,operation){
    var result=operation(a,b);
    console.log(result);
}

display(5,6,add); //display is higher order function
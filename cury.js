// function add(x,y){
//     console.log(x+y);
// }


// function adding(op){
//     return function(a){
//         return function(b){
//             return op(a,b);
//         }
//     }
// }

// var curried=adding(add);
// add(4,5);
// curried(4)(5);


var y = 24; 
// JavaScript Interview Questions
 function favFunction(){ 
var x = 667; 
var anotherFavFunction = function(){ 
console.log(x); // Does not find x inside anotherFavFunction, so looks for variable
 } 
anotherFavFunction(); 
yetAnotherFavFunction(); 
var yetAnotherFavFunction = function(){ 
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for varia
} 
} 
favFunction();


// ano();//in function expression we do not do this only simple function hoisting works
// var ano=function(){
//     var x=90;
//     console.log(x);
// }

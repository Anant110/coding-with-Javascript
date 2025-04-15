// c();
// b();

// function statement or function declaration
// function c(){
//     var a=10;
//     console.log(a);
// }

// // function expression
// var b=function(){
//     console.log("Hello kaku");
// }

// Anonymous function-->function withous a name it is used to assigned value to the variable like in function expression
// function (){

// }

// Named function expression
// var c=function xys(){
//     console.log("Hello bad");
// }
// c();
// xys(); //it gives an error because xys() is not create in global scope it is created in local scope so its value is not assigned in outside the scope but it can be assigned in local scope


// First class function
// var c=function c(){
//     console.log('Hello')
// }
// function xyz(){
    
// }
// c(xyz)


// (function(){
//     console.log( "hello");
// })();

//arrow function
var arrow=(a,b)=>console.log(a+b);
arrow(5,6);
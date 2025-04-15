// function x(){
//     var i=10;
//     setInterval(function () {
//         console.log(10);
//     }, 2000);

//     console.log("Hello Kaku");
// }
// x();


// function x(){
//     for(var i=1;i<=5;i++){
//         function close(i){
//             setTimeout(function () {
//                 console.log(i)
//             }, i*1000);
//         }
//         close(i);
//     }
// }
// x();

//closure example
function x(){
    var a=90;
    function y(){
        console.log(a);
    }
    return y;
}

var z=x();
// console.log(z);
z();
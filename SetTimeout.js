// function fun(){
//     var a=10;
//     setInterval(function () {
//         console.log(a);
//     }, 3000);
//     console.log("Hello");
// }
// fun();


// function fun(){
//     for(var i=1;i<=5;i++) //when we use var same value is initilaized
//     setInterval(function () {
//         console.log(i);
//     }, i*1000);
//     console.log("Hello");
// }
// fun();


function fun(){
    for(let i=1;i<=5;i++) //when we use let different value is printed
    setInterval(function () {
        console.log(i);
    }, 2000);
    console.log("Hello");
}
fun();



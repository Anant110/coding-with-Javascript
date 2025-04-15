
//higher order functions

// function func(){
//     console.log("I am call_back");
// }

// function higher_order(fun){
//     console.log("I am Higher order");
//     fun();
// }

// higher_order(func);


const radius=[1,6,3,4,8];

const Area=function(radius){
    return Math.PI * radius * radius;
};

const circumferance=function(radius){
    return 2*Math.PI*radius;
}

const calculateArea=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculateArea(radius,Area));

// console.log(calculateArea(radius,circumferance));

console.log(radius.map(Area));  //map function makes the new array
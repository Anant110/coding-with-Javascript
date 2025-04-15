let mp1=new Map();
mp1.set('value',1);
console.log(mp1);

// let mp2=new WeakMap();
// mp2.set('value',34);
// console.log(mp2); //error beacuse it contains key value object


// let obj={message:"hello"};
// const mp=new WeakMap();
// mp.set(obj,{age:"89"});
// console.log(mp.get(obj)); //prints only age:"89" because set links the current object with this object


//if we enter the two values then we do like this
let obj1={message:"hello"};
const mp2=new WeakMap();
mp2.set(obj1,obj1);
obj1.age="89";
console.log(mp2.get(obj1)); //prints two objects seperately in key value form
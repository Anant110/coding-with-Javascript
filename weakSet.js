const newSet=new Set([12,89,56]);
console.log(newSet); //{12,89,56}

// const weak=new WeakSet([12,78,90]); //Error:only cantains the object
// console.log(weak);

const obj={message:"Hello"};
const obj1=new WeakSet([obj]);
console.log(obj1.has(obj));

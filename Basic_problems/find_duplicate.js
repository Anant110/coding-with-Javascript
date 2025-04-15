const arr=[12,67,67,89,23,12];

//indexOf returns the index of element when it appears first time
const duplicates=arr.filter((value,index,num)=>num.indexOf(value)!==index);

console.log(duplicates);
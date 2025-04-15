const arr=[12,67,89,23,56];

const sum=arr.reduce(function (prev,curr) {
    return prev+curr;
})

console.log(sum);
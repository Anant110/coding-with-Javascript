// function findElement(arr, func) {

//     const a= arr.find(func); //it returns only first value that is true
//     console.log(a);
//    }
   
// findElement([1, 2, 3, 4], num => num % 2 === 0);


function findElement(arr, func) {

    const a= arr.filter(func); //it returns entire array where the condition holds true
    console.log(a);
   }
   
findElement([1, 2, 3, 4], num => num % 2 === 0);
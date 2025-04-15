
// arr.reduce((accumulator, currentValue, index, array) => {
//     // operation on accumulator and currentValue
// }, initialValue);
//Initial value of accumulator



//divide the array according to the n
function dividegroups(arr,n){
    console.log(arr.reduce((res,_,ind)=>{
        if(ind%2===0){
            res.push(arr.slice(ind,ind+n));
        }
        return res;
    },[]))
}

dividegroups([12,45,67,89],2);
  
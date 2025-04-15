const arr=[1,2,3,4,6,8,9,5];

const missing=((nums)=>{
    const max_val=Math.max(...nums);
    const min_val=Math.min(...nums);
    for(let i=min_val;i<=max_val;i++){
        if(arr.indexOf(i)<0){
            console.log(i);
            break;
        }
    }
})

missing(arr);
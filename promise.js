// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const ran=Math.floor(Math.random()*10);

//         if(ran<5){
//             resolve(`Query is resolved:${ran}`);
//         }

//         else{
//             reject(`Query is rejected:${ran}`);
//         }


//     }, 1000);
// })
// myPromise.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


// const elements=[];
function sumofthree(...elements){
    return new Promise((resolve,reject)=>{
        if(elements.length>3){
            reject("Number of elements is greater than 3");
        }
        else{
            let sum=0;
            let i=0;
            while(i<elements.length){
                sum+=elements[i];
                i++;
            }
            resolve(`The sum of three numbers is:${sum}`);
        }
    })
}

sumofthree(12,56,89,90).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
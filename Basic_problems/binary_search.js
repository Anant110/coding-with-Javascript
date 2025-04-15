

function binary_search(arr,n,startPos,lastPos){
    let cnt=0;
    arr.sort((a,b)=>a-b);
    while(startPos<=lastPos){
        let middle= Math.floor((startPos+lastPos)/2);
        if(arr[middle]===n){
            console.log(`Elment is found at index:${middle}`);
            cnt++;
            break;
        }
        else if(arr[middle]>n){
            lastPos=middle-1;
        }
        else{
            startPos=middle+1;
        }
    }
    if(cnt==0) console.log("Element is not found");
}
const arr=[11,78,89,90,102];
let n=parseInt(prompt("Enter number you want to serch in array: "));
let size=arr.length;
binary_search(arr,n,0,size-1);
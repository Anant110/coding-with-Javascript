// function* genfun(){
//     yield 2;
//     yield 5;
// }

// console.log(genfun());
// console.log(genfun().next());

//Iterator example
function* genfunc(){
    let count=0;
    for(let i=0;i<3;i++){
        count++;
        yield i;
    }
    return count;
}

let iterator=genfunc();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); 
console.log(iterator.next()); 
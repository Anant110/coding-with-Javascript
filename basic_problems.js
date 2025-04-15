// function func1(){ 
//     setTimeout(()=>{ 
//     console.log(x); 
//     console.log(y); 
//     },3000); 
//     var x = 2; 
//     let y = 12; 
//     } 
// func1(); 


// (function(){ 
//     setTimeout(()=> console.log(1),2000); 
//     console.log(2); 
//     setTimeout(()=> console.log(3),0); 
//     console.log(4); 
//     })();

 
// let x= {}, y = {name:"Ronny"},z = {name:"John"}; 
// x[y] = {name:"Vivek"}; 
// x[z] = {name:"Akki"}; 
// console.log(x[y]); 

// var x = 23; 
 
// (function(){ 
//   var x = 43; 
//   (function random(){ 
//       x++; 
//       console.log(x); 
//       var x=21; 
//   })(); 
// })(); 

 
// let hero = { 
//     powerLevel: 99, 
//     getPower(){ 
//       return this.powerLevel; 
//     } 
//   } 
   
//   let getPower = hero.getPower; 
//   let hero2 = {powerLevel:42}; 
//   console.log(getPower()); 
//   console.log(getPower.apply(hero2)); 


const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
for (let i = 0; i < 10; i++) { 
setTimeout(() => console.log(b[i]), 1000); 
} 

for (var i = 0; i < 10; i++) { 
setTimeout(() => console.log(b[i]), 1000); 
}
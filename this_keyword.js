// var obj={
//     name:"Hello",
//     address:"Moradabad,India",
//     getName:function(){
//         console.log(this.name);
//     }
// }

// var get=obj.getName;

// var obj2={name:"Anant",get};
// obj2.get();


var obj={
    name:"Hello",
    address:"Moradabad,India",
    getName:function(){
        console.log(this.address);
    }
}

var getName=obj.getName;

var obj2={address:"Kota,India"};
obj2.getName();

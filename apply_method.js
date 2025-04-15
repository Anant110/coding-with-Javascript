function saysomething(msg){
    console.log(this.name+" is "+msg);
}

var person={name:"Anant"};
saysomething.apply(person,["Great"]);
const animal={
    speak(){
        console.log("animal Object");
    }
}

const dog=Object.create(animal);
dog.name="Puppy";

dog.bark=function(){
    console.log("Barking");
}

dog.bark();
animal.speak();
dog.speak();
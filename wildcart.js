let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; //matches the specified string in the above sentences
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));
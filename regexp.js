let twinkleStar = "Twinkle, twinkle, little star";
//To search or extract a pattern irrespective of case more than once, you can use the global search flag: gi.
let starRegex = /Twinkle/gi; //output:['Twinkle','twinkle']
let result = twinkleStar.match(starRegex);
console.log(result);

let twinkleStar1 = "Twinkle,Twinkle twinkle, little star";
//To search or extract a pattern more than once, you can use the global search flag: g.
let starRegex1 = /Twinkle/g; //output:['Twinkle']
let result1 = twinkleStar1.match(starRegex1);
console.log(result1);
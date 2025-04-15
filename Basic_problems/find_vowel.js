string=prompt("Enter and sentence");
const vowels=['a','e','i','o','u'];

const countVowel=((str)=>{
    var count=0;
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    console.log(count);
})

countVowel(string);
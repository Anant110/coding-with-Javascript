var str=prompt("Enter the string");

const palindrome=((str)=>{
    var str1=str.split("").reverse().join("");
    console.log(str1===str);
})

palindrome(str);
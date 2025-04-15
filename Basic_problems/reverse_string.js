var str=prompt("Enter string");
const reverse_string=((str)=>{
    var str_rev=str.split("").reverse().join("");
    console.log(str_rev);
})

reverse_string(str);
let str1="Kamla";
let str2="hidhjsfiosjfioehrgf";

isAnagram(str1,str2);

function isAnagram(one,two){
    let first=one.toLowerCase();
    let second=two.toLowerCase();

    first=first.split("").sort().join("");
    second=second.split("").sort().join("");

    console.log(first===second?"Anangram":"Not Anagram");
}


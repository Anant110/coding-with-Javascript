//Inside a character set, you can define a range of characters to match using a hyphen character: -.
//For example, to match lowercase letters a through e you would use [a-e].
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
//In order, the three match calls would return the values ["cat"], ["bat"], and null



//Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
//For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
//Also, it is possible to combine a range of letters and numbers in a single character set.
let jennyStr = "Jenny8675309";
let myRegex1 = /[a-z0-9]/ig;
jennyStr.match(myRegex1);
//Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.



// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou\W\d_]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result); // Should be exactly 9 characters



// Explanation:
// [^aeiou] — match non-vowels
// \W — excludes non-word characters (like ., space)
// \d — excludes digits (like 3)
// _ — just in case there's an underscore
// g and i — match all and ignore case



// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].
// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.



let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
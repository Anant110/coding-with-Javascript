function largestOfFour(arr) {
  const newaree=arr.map(num=>{
    return (Math.max(...num));
  })
  return newaree;
  
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);


//using spread operator to find the longest word length
const findLongestWordLength = str => Math.max(...str.split(" ").map(word => word.length));

findLongestWordLength('The quick brown fox jumped over the lazy dog');

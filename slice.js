function truncateString(str, num) {
    return str.length>num?str.slice(0,num)+"...":str; //slice method is same as extracting the sub string from the string
  }
  
  truncateString('A-tisket a-tasket A green and yellow basket', 8);

  function chunkArrayInGroups(arr, size) {
    const result=[];
    for(let i=0;i<arr.length;i+=size){
      result.push(arr.slice(i,i+size))
    }
    return result;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
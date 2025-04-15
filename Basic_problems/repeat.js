function repeatStringNumTimes(str, num) {
    if(num<=0) return "";
    let st="";
    while(num--){
      st+=str;
    }
    return st;
  }
  repeatStringNumTimes('abc', 3);


function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : "";
}
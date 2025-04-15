var str=prompt("Enter any sentence");
const capital=((str)=>{
    var string=str.split(" ");
    var newstr=string.map((val)=>{
        return val.charAt(0).toUpperCase()+val.slice(1);
    })
    return newstr.join(" ");
})
console.log(capital(str));


//another tipical problem
function titleCase(str) {
    let string=str.split(" ");
    const newstr=string.map((val)=>{
        //at 0 index word is capitailize to S then string is SsHoRt then remove s using slice(1) cutts of 
        // path then string is SHoRt then HoRt change to hort
      return val.charAt(0).toUpperCase()+val.slice(1).toLowerCase()
    })
    return newstr.join(" ");
  }
  
titleCase("sHoRt AnD sToUt");

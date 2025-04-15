const str="Hello How are you";

const rev_word=((str)=>{
    var data=str.split(" ").reverse().join(" "); //if we talk about words then use " " instead of "";
    console.log(data);
})

rev_word(str);
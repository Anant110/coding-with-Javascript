function memo(){
    var cache={};

    return function (num){
        if(num in cache){
            console.log("Cache Memory");
            console.log(cache[num]);
        }
        else{
            cache[num]=num+256;
            console.log(cache[num]);
        }
    }
}
var answer=memo();
answer(11);
answer(11);


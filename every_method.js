function mutate(str){
    console.log(str[0].toLowerCase().split("").every(char=>str[1].toLowerCase().includes(char)));
}

mutate(['Hello','hey']);
var clearDigits = function(string){
    let stack = [];

    let result = "";

    for(let i=0;i<string.length;i++){
        
        if(string[i].match(/\d/)){
            stack.pop()
            continue
        }
        stack.push(string[i]);
        
    }

    return result = stack.join("") ;

}

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
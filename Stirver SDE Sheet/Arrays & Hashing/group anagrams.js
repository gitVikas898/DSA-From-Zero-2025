function isValid(str1,str2){

    if(str1.length !== str2.length) return false;

    let lookup = {};

    for(let val of str1){
        lookup[val] = (lookup[val] || 0) + 1;
    }

    for(let char of str2){
        if(!lookup[char]) return false;

        lookup[char] -=1;
    }
    return true;
}

strs = ["act","pots","tops","cat","stop","hat"]

function GroupedAnagrams(strs){

    strs.sort();

    //[ 'act', 'cat', 'hat', 'pots', 'stop', 'tops' ]

    let result = [];

    let i =0;

    for(let j = 1;j<strs.length;j++){
        let level = []
        if(isValid(strs[i],strs[j])){
            level.push(strs[i],strs[j])
        }
        i++;
        result.push(level);
    }

    return result;
}
console.log(GroupedAnagrams(strs))
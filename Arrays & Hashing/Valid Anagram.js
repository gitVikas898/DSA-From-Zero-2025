export function isValid(s,t){

    if(s.length !== t.length) return false;

    let lookup = {};

    for( let val of s){
        lookup[val] = (lookup[val] || 0)+1;
    }
    console.log(lookup)
    for( let char of t){
        if(!lookup[char]) return false;

        lookup[char] -=1;
    }
    return true
}

console.log(isValid("xx","x"))
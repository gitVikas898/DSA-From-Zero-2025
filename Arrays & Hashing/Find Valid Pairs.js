var findValidPair = function(s) {
  let map = new Map();
  
  for(let char of s){
    map.set(char,(map.get(char) || 0)+1)
  }

  for(let i=0;i<s.length-1;i++){
        let first = s[i];
        let second = s[i+1];

        if(first !== second && map.get(first) == Number(first) && map.get(second) == Number(second)){
            return first+second
        }
  }
  return ""
  
};
console.log(findValidPair("221"));
/**Longest substring with distinct characters */

function longestUnique(str){
   let map = new Map();
   let start = 0;
   let maxlen = 0;

   for(let end = 0;end<str.length;end++){
     let char = str[end];

    if(map.has(char) && map.get(char)>=start){
        start = map.get(char)+1;
    }
     map.set(char,end);

     maxlen = Math.max(maxlen,end-start+1);
   }
   return maxlen;
}

console.log(longestUnique("geeksforgeeks"));
console.log(longestUnique("aaa"));
console.log(longestUnique("abcdefabcbb"));
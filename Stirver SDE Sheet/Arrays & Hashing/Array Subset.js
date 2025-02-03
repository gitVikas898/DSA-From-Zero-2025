function isSubset(a,b){

    let hashMap = {}

   for(let val of a){
        hashMap[val] = (hashMap[val] || 0) + 1;
   }
   for(let val of b){
    if(!hashMap[val]){
        return false;
    }
   }
   return true;

}

console.log("Test #1",isSubset([11, 7, 1, 13, 21, 3, 7, 3],[11, 3, 7, 1, 7]));
console.log("Test #2",isSubset( [1, 2, 3, 4, 4, 5, 6],[1, 2, 4]));
console.log("Test #3",isSubset( [10, 5, 2, 23, 19],[19, 5, 3]));

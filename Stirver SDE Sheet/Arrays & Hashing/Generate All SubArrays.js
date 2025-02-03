function generateSubArrays(arr){
    let result = [];
    
    for(let i =0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            result.push(arr.slice(i,j+1));
        }
    }

    
   return result;
}
console.log(generateSubArrays([1,2,3]))
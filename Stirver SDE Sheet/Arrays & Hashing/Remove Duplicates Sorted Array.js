// Dont use HashMap or Set

function removeDup(arr){
 let length = arr.length;

 if(length<=1)return length;

 let index = 1;

 for(let i = 1;i<length;i++){
    if(arr[i] !== arr[i-1]){
        arr[index++] = arr[i];
    }
 }
 return index;
}

console.log(removeDup([2, 2, 2, 2, 2]));

console.log(removeDup([1, 2, 4]));


console.log(removeDup([1, 2, 2,4]));


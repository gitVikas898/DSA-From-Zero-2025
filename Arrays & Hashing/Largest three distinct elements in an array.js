function findThree(arr){
  let first = -Infinity , second = -Infinity , third = -Infinity;
  let result = [];


      arr.forEach(x => {
        if(x>first){
            third = second;
            second = first;
            first = x
        }
        else if(x>second && x !== first){
            third = second;
            second = x
        }
        else if(x>third && x!== second && x !== first){
            third = x;
        }
      });

    if(first!== -Infinity)   result.push(first);
    if(second!== -Infinity)   result.push(second);
    if(third!== -Infinity)   result.push(third);

  return result
  
}


console.log("Test #1",findThree([12, 35, 1, 10, 34, 1]));

console.log("Test #2",findThree([10, 5, 10]));

console.log("Test #3" ,findThree([10, 10, 10]));

console.log("Test #4" ,findThree([10, 4, 3, 50, 23, 90, 90]));

console.log("Test #4" ,findThree([9, 6]));



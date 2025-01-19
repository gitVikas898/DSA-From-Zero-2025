function findSubsequences(arr, k) {
    const result = [];
  
    function backtrack(start, current) {
      if (current.length <= k) {
        result.push([...current]); // Create a copy of the current subsequence
      }
  
      for (let i = start; i < arr.length; i++) {
        current.push(arr[i]);
        backtrack(i + 1, current);
        current.pop(); // Backtrack
      }
    }
  
    backtrack(0, []); 
    return result;
  }
  
  // Example usage
  const arr = [1, 2, 3];
  const k = 2;
  const subsequences = findSubsequences(arr, k);
  console.log(subsequences);
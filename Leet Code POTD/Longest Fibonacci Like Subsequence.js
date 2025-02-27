var lenLongestFibSubseq = function (arr) {
  let result = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let temp = [];
        let sum = arr[i] + arr[j];

        if (sum === arr[k]) {
          temp.push(arr[i], arr[j], arr[k]);
        }

        if (temp.length > 0) {
          result.push(temp);
        }
      }
    }
  }
  return result;
};
console.log(lenLongestFibSubseq([1,3,7,11,12,14,18]));
console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]));

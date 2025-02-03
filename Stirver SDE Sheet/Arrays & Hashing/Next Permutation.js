function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function findNext(arr) {
  const n = arr.length;

  let pivot = -1;

  for (let end = n - 2; end >= 0; end--) {
    if (arr[end]<arr[end+1]) {
      pivot = end;
      break;
    }
  }
  console.log(pivot)

  if(pivot === -1){
    return arr.reverse();
  }
  let smallest =-1;

  for (let i = n-1; i>pivot; i--) {
    if (arr[i] > arr[pivot]) {
      smallest = i;
      break;
    }
  }
  swap(arr,pivot,smallest);

  let start = pivot+1;
  let end = n-1;

  while(start<end){
    swap(arr,start,end);
    start++;
    end--;
  }

  return arr;
}

console.log(findNext([3,2,1]))

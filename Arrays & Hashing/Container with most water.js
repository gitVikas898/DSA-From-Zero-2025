//Naive Approach
/*function mostWater(arr){
    const n = arr.length;
    let area = 0;
    let maxArea = area;

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let base = j-i;
            let height = Math.min(arr[i],arr[j]);
            area = base*height;
            maxArea = Math.max(area,maxArea);
        }
    }
    return maxArea;
}
*/

// efficient approach two pointers approach

function mostWater(arr){
    let n = arr.length;
    let left = 0;
    let right = n-1;
    let currentArea = 0;
    let maxArea = currentArea; 
    while(left<right){
        let base = right-left;
        let height = Math.min(arr[left],arr[right]);
        currentArea = base*height;
        maxArea = Math.max(currentArea,maxArea);

        if(arr[left]<arr[right]) left++;
        else right--;
    }
    return maxArea;
}

console.log(mostWater([1, 5, 4, 3]));
console.log(mostWater([3, 1, 2, 4, 5]))
console.log(mostWater([2, 1, 8, 6, 4, 6, 5, 5]))


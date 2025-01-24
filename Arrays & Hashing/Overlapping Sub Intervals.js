function intervals(arr){
    arr.sort((a,b)=>a[0]-b[0]);
    const n = arr.length;
    
    let ans = [arr[0]];

    for(let i =1;i<n;i++){

        let last = ans[ans.length-1];
        let curr = arr[i];

        if(curr[0]<=last[1]){
            last[1] = Math.max(last[1],curr[1]);
        }else{
            ans.push(curr);
        }
    }
    return ans;
}

console.log(intervals([[1,3],[2,6],[8,10],[15,18]]))
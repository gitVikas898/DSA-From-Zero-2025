function quads(arr,target){
    const n = arr.length;
    let ans = []
    arr.sort((a,b)=>a-b);

    for(let i =0;i<n;i++){
        if(i>0 && arr[i] ===arr[i-1])continue
        for(let j = i+1;j<n;j++){
            if(j!==i+1 && arr[j] ===arr[j-1])continue

            let k = j+1;
            let l = n-1;

            while(k<l){
                let sum = arr[i]+arr[j]+arr[k]+arr[l];

                if(sum>target){
                    l--;
                }
                else if(sum<target){
                    k++;
                }else{
                    let temp = [arr[i],arr[j],arr[k],arr[l]];
                    ans.push(temp);
                    l--;
                    k++;
                    while(k<l && arr[k] === arr[k-1])k++;
                    while(k<l && arr[l] === arr[l+1])l--;
                }
            }
        }
    }
    return ans;
}

function prints(input,k){
    console.log(quads(input,k));
}


prints([1,0,-1,0,-2,2],0)
prints([2,2,2,2,2],8)
prints([-1, -1, -1],-2)
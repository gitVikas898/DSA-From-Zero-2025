function TopK(nums,k){
    let outPut = []
    let hashMap = {};

    for(let val of nums){
        hashMap[val] = (hashMap[val] || 0) + 1;
    }

    for(let [num,frq] of Object.entries(hashMap)){
        outPut.push([num,frq]);
        outPut.sort((a,b)=>a[1]-b[1]);

        if(outPut.length>k){
            outPut.shift();
        }
    }
    return outPut.map(([num,frq])=>parseInt(num));

}

console.log(TopK([1,2,2,3,3,3],2))
console.log(TopK([7,7],1));
console.log(TopK([1,2],2));
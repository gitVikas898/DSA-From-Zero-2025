function findLeaders(arr){
    const length = arr.length
    let currentLeader = arr[length-1];
    let result = [currentLeader];

    for(let i = length-2;i>=0;i--){
        if(arr[i]>=currentLeader){
            currentLeader = arr[i];
            result.push(currentLeader);
        }
    }
    return result.reverse()
}

console.log(findLeaders([16, 17, 4, 3, 5, 2]));
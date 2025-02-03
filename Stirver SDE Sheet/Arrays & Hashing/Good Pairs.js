function countGoodPairs(arr){
    let map = {};

    for(val of arr){
        map[val] = (map[val] || 0) + 1;
    }

    let goodPairs = 0;

    for(let [key,val] of Object.entries(map)){
        let result = Math.floor((val*(val-1))/2);
        goodPairs +=result;
    }

    console.log(goodPairs)
}

countGoodPairs([1,2,3]);
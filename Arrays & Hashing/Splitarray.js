function split(arr) {
    let map = {};

    for(let val of arr){
        map[val] = (map[val] || 0) + 1;
    }

    console.log(map);

    for( let key in map){
        if(map[key]>2){
            return false;
        }
    }

    return true;
}

console.log(split([1,1,2,2,2,3,4]))
const hashMap = {
    3:"Vikas",
    5:"Komal",
    7 :"Apple",
    9:"Orrange"
}

let nums = [3,4,5,6];
let target = 10;

for(let i=0;i<nums.length;i++){
    let difference = target-nums[i];

    if(difference in hashMap){
        console.log(hashMap[difference]);
    }
}
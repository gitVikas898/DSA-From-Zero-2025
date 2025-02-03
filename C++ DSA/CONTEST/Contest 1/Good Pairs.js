function goodPair(n,k){
    const MOD = 1e9 + 7;

   
    const max_m = Math.floor(n / k);

  
    const part1 = BigInt(n + 1) * BigInt(max_m + 1) % BigInt(MOD);

   
    const part2 = BigInt(k) * BigInt(max_m) * BigInt(max_m + 1) / BigInt(2) % BigInt(MOD);

  
    const result = (part1 - part2 + BigInt(MOD)) % BigInt(MOD);

    return Number(result); 
}

console.log(goodPair(2,2))
console.log(goodPair(5,1))
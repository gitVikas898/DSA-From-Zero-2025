var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) return true; // Already equal

    let diffIndices = [];

    // Find indices where s1 and s2 differ
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffIndices.push(i);
        }
    }

    // If there are not exactly 2 differences, return false
    if (diffIndices.length !== 2) return false;

    // Check if swapping the two differing characters in s2 makes it equal to s1
    let [i, j] = diffIndices;
    return s1[i] === s2[j] && s1[j] === s2[i];
};

console.log(areAlmostEqual("bank", "kanb"));
console.log(areAlmostEqual("attack", "defend"));
console.log(areAlmostEqual("kelb", "kelb"));
console.log(areAlmostEqual("caa","aaz"))
console.log(areAlmostEqual("bankb","kannb"))

function generateRow(row){
    let ans = 1;
    let result = [];
    result.push(ans);

    for(let i = 1;i<row;i++){
        ans = ans*(row-i);
        ans = ans/i;

        result.push(ans);
    }
    return result;
}

function printPascalTirangle(numRows){
    let ans = [];
    for(let i=1;i<=numRows;i++){
        ans.push(generateRow(i));
    }

    return ans;
}

console.log(printPascalTirangle(5));
console.log(generateRow(3))
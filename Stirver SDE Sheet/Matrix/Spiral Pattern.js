function spiral(arr){
    let n = arr.length;   //row
    let m = arr[0].length; //col

    let result = []

    let top =0,right =m-1,left=0,bottom=n-1;

    while(top<=bottom && left<=right){

        for(let i=left;i<=right;i++){
            result.push(arr[top][i]);
        }
        top++;
    
        for(let i=top;i<=bottom;i++){
            result.push(arr[i][right]);
        }
        right--;
        if(top<=bottom){
            for(let i=right;i>=left;i--){
                result.push(arr[bottom][i]);
            }
            bottom--;
        }
        
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                result.push(arr[i][left]);
            }
            left++;
        }
    }

   
   return result;
}

console.log(spiral([[1,2,3],[4,5,6],[7,8,9]]));
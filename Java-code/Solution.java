import java.util.HashMap;

class Solution{
    public static void main(String[] args) {
        int [] input = {15, -2, 2, -8, 1, 7, 10, 23};

        System.out.println(findMaxLength(input));
    }

    public static int findMaxLength(int[]arr){

        HashMap<Integer,Integer> map = new HashMap<>();
        int maxi = 0;
        int sum =0;
        int n = arr.length;

        for(int i =0;i<n;i++){
            sum +=arr[i];

            if(sum == 0){
                maxi = Math.max(maxi, i+1);
            }else if(map.containsKey(sum)){
                maxi = Math.max(maxi,i-map.get(sum));
            }else{
                map.put(sum,i);
            }
        }
        return maxi;
    }
}

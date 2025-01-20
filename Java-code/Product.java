
public class Product {
    public static void main(String[] args) {
        int [] input = {-3,-1,-1};
        System.out.println(findMaxProduct(input));
    }   
    
    public static int findMaxProduct(int[]arr){
        int currentProd =1;
        int maxprod = -1 / 0;
        int n = arr.length;
        if(n==1){
            return arr[0];
        }

        for(int i = 0;i<n;i++){
            currentProd  = currentProd*arr[i];
            maxprod = Math.max(currentProd,maxprod);

            if(currentProd<0){
                currentProd = 1;
            }
        }
        return maxprod;
    }
}

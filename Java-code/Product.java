import java.util.Scanner;

public class Product {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the Size of the Array ");
        int size = scan.nextInt();
       
        int [] input = {2,3,-2,4};
        for(int i = 0;i<size;i++){
            input[i] = scan.nextInt();
        }
        System.out.println(findMaxProduct(input));

        scan.close();
    }   
    
    public static int findMaxProduct(int[]arr){
        int currentProd =1;
        int maxprod = 0;
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

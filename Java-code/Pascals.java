public class Pascals {
    public static void main(String[] args) {
        
    }

    //Variantion 1 : Computes the position of an element given n and r
    public static long nCr(int n , int r){
        long result = 1;

        for(int i = 0;i<r;i++){
            result = result * (n-i);
            result = result/(i+1);
        }
        return result;
    }

    // Variation 2 : Print the nth row of the Triangle


    public static void print(int n){
        long ans = 1;
        System.out.println(ans+" ");

        for(int i=1;i<n;i++){
            ans = ans*(n-i);
            ans = ans/i;

            System.out.println(ans+" ");
        }
        System.out.println();
    }

    //Variation 3 LC : 118. Pascal's Triangle print the  Given n print all rows till n

    


}

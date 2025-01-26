public class Count {
    public static void main(String[] args) {
        int number = 23;
        System.out.println(countsDigit(number));
        
    }

    public static int countsDigit(int n){
        int count = 0;
        int number = n;
        while(number!=0){
            int digit = number%10;
            if(n%digit == 0){
                count++;
            }
            number = number/10;
        }

        return count;
    }
}

import java.util.Scanner;

public class A{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t= scan.nextInt();
        scan.nextLine();
        
        for(int i=0;i<t;i++){
            String word = scan.nextLine();

            if(word.endsWith("us")){
                String plural = word.substring(0, word.length()-2)+"i";
                System.out.println(plural);
            }
        }
        scan.close();
    }
}
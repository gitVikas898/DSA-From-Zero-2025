import java.util.Scanner;

public class B {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        scanner.nextLine(); 
        
        while (t-- > 0) {
            String s = scanner.nextLine();
            System.out.println(solve(s));
        }
        scanner.close();
    }
    
    static int solve(String s) {
        
        if (s.length() == 1) {
            return 1;
        }

        if (s.length() == 0) {
            return 1;
        }
        
        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                
                return solve(s.substring(0, i) + s.substring(i + 2));
            }
        }
        
        
        return s.length();
    }
}
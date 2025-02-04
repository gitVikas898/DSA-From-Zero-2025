class Special{
    public static void main(String[] args) {
        int [] input1 = {2,1,4};
        int [] input2 = {4,3,1,6};
        int [] input3 = {2};
        System.out.println(FindSpecial(input1));
        System.out.println(FindSpecial(input2));
        System.out.println(FindSpecial(input3));
    }

    public static boolean FindSpecial(int arr[]){

        int n = arr.length;

        if(n == 1){
            return true;
        }
        for(int i=1;i<n;i++){
            if(arr[i]%2 == 0){
                if(arr[i-1] %2 !=1){
                    return false;
                }
            }else{
                if(arr[i-1] % 2 != 0){
                    return false;
                }
            }
        }

        return true;
    }
}
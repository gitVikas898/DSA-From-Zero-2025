 class Remove {
     public static void main(String[] args) {
         int []input = {3,2,2,3};
         int key = 3;
         System.out.println(removeElement(input,key));
         
     }

     public static  int removeElement(int []arr , int key){
         int slow = 0;
         int fast = 0;
         while(fast<arr.length){
            if(arr[fast] != key ){
                arr[slow] = arr[fast];
                slow++;
            }
            fast++;
         }
         return slow;
     }
}

import java.util.Arrays;
class Lomuto {
    public static void main(String[] args) {
        int []arr ={9,12,5,10,14,3,10};
        lomuto(arr);
        System.out.print(Arrays.toString(arr));
        //[10, 30, 40, 50, 70, 90, 80]  70 is pivot left of pivot all small element and right all greater 
    }
    public static void lomuto(int []arr){
        int low = 0;
        int high = arr.length-1;
        int pivot= 10;
        int i=low-1;
        for(int j = low ; j< arr.length-1;j++){
            if(arr[j]<pivot){
                i++;
                int temp = arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
        int temp =arr[i+1];
        arr[i+1]=arr[high];
        arr[high]=temp;
    }
}

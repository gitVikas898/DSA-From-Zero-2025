public class Mergesort {
    static int count =0;
    public static void main(String[] args) {
        int [] arr ={2, 4, 1, 3, 5};
        int n = arr.length;
        System.out.println(countInversions(arr, n));
       }
       public static void mergeSort(int[]arr,int low , int high){
     
     
        if(high>low){
         int mid = low+(high-low)/2;
         mergeSort(arr,low,mid);
         mergeSort(arr,mid+1,high);
         merge(arr,low,mid,high);
        }
     
       }
     
       public static int merge(int[]arr,int low , int mid ,int high){
     
        int []a = new int[mid-low+1];
        int []b = new int[high-mid];
        for (int i = 0; i < a.length; i++) {
             a[i] =arr[low+i];
        }
        for (int i = 0; i < b.length; i++) {
           b[i] =arr[i+mid+1];
        }
        int i=0;
        int j =0;
        int k=0;
        while(i< a.length && j<b.length){
           if(a[i]<=b[j]){
            arr[k]=a[i];
            i++;
           }
           else{
             arr[k]=b[j];
             count+=(mid-low+1);
             j++;
           }
           k++;
        }
        while(i< a.length){
          arr[k]=a[i];
          k++;
          i++;
        }
        while(j< b.length){
         arr[k]=b[j];
         k++;
         j++;
        }

        return count;
     
       }

       public static int countInversions(int[]a,int n){
            mergeSort(a, 0, n-1);
            return count;
       }
}

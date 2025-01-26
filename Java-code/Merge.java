public class Merge {
    public static void main(String[] args) {
        int[]arr ={5,6,7,8,1,2,3,4};
        merge(arr);

    }
    public static void merge(int[]arr){
        int low = 0;
        int high = arr.length-1;
        int mid = (low+high)/2;

        int []a= new int[mid+1];
        int []b =new int[high-mid];
        
        for (int i = 0; i < a.length; i++) {
            a[i]=arr[i];
        }

        for (int i =0; i < b.length ; i++) {
            b[i]=arr[i+mid+1];
        }

        int l = 0;
        int m = 0;
        int k = 0;

        while(l< a.length && m < b.length){

            if(a[l]<=b[m]){
               arr[k]=a[l];
                l++;
            }

            else{
               arr[k]=b[m];
                m++;
            }
            k++;
        }
        while(l<a.length){
            arr[k]=a[l];
            k++;
            l++;
        }
        while(m<b.length){
            arr[k]=b[m];
            k++;
            m++;
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}

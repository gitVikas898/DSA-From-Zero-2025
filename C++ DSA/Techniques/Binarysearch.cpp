#include<iostream>
#include<vector>

using namespace std;


int binarySearch(vector<int>&arr,int k){
    int left = 0;
    int right = arr.size()-1;
    while(left<right){
        int mid = (left + right)/2;

        if(arr[mid] == k ) return mid;
        else if(k>arr[mid]) left = mid+1;
        else right = mid-1;
    }
    return -1;
}



int main(){
    vector<int>myarray = {10,20,30,40,50,60,70,80};
    int k = 40;
    int result_index = binarySearch(myarray,k);
    cout<<"Element found at index : "<<result_index<<endl;
    return 0;
}
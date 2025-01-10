#include<vector>
#include<iostream>
 using namespace std;

 int TrapWater(vector<int>&arr){
    int n = arr.size();
    int result = 0;
    vector<int>left_max(n);
    vector<int>right_max(n);

    left_max[0] = arr[0];
    right_max[n-1] = arr[n-1];

    for(int i = 1;i<n;i++){
        left_max[i] = max(arr[i],left_max[i-1]);
    }

    for(int i = n-2;i>=0;i--){
        right_max[i] = max(arr[i],right_max[i+1]);
    }

    for(int i = 1;i<n;i++){
        result = result + (min(left_max[i],right_max[i])-arr[i]); 
    }

    return result;
 }

int main(){
    vector<int>arr = { 2, 1, 5, 3, 1, 0, 4 };
    int myResult = TrapWater(arr);
    cout<<myResult<<endl;
    return 0;
}
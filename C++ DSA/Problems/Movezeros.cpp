#include<iostream>
#include<vector>

using namespace std;



vector<int>pushZerosToEnd(vector<int>&arr){

    int count = 0;

    for(int i = 0;i<arr.size();i++){
        if(arr[i] != 0){
            arr[count] = arr[i];
            count++;
        }
    }

    for(int i = count;i<arr.size();i++){
        arr[i] = 0;
    }

    return arr;

}




int main(){
    vector<int>arr = {1,2,4,0,3,0,5,0};

    vector<int>myarr = pushZerosToEnd(arr);

    for(int val : myarr){
        cout<<val<<" ";
    }
    return 0;
}
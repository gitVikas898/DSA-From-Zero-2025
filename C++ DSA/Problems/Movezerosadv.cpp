#include<iostream>
#include<vector>

using namespace std;

vector<int>moveZeros(vector<int>&arr){
    int count = 0;

    for(int i = 0;i<arr.size();i++){
        if(arr[i] != 0){
            int temp = arr[i];
            arr[i] = arr[count];
            arr[count] = temp;
            count++; 
        }
    }

    return arr;
}

int main(){
    vector<int>arr = {1,2,4,0,3,0,5,0};

    vector<int>result = moveZeros(arr);

    for(int val : result){
        cout<<val<<" ";
    }
    return 0;
}
#include<iostream>
#include<vector>
#include<bits/stdc++.h>

using namespace std;

bool findThreeSum(vector<int>&arr,int target){
    int n = arr.size();
    vector<int>result;
    sort(arr.begin(),arr.end());

    for(int i = 0;i<n-2;i++){
        int left = i+1 , right = n-1;

        int requiredSum = target-arr[i];

        while(left<right){

            if(arr[left] + arr[right] == requiredSum){
                return true;
            }else if (arr[left] + arr[right] < requiredSum) left++;
            else right--;
        }
    }

    return false;
}

int main(){

    vector<int>Input = { 1, 4, 45, 6, 10, 8 };
    int target = 13;

    bool myResult = findThreeSum(Input,target);

    if(myResult) cout<<"Triplet Exist";
    else cout<<"No Such Triplet Found";

    return 0;

}
//Given a sorted array arr (sorted in ascending order) and a target, find if there exists any pair of elements (arr[i], arr[j]) such that their sum is equal to the target.//

#include<iostream>
#include<vector>
#include <bits/stdc++.h>
using namespace std;

bool TwoSum(vector<int>&arr,int target){

    if(arr.size()<= 1) return false;
    sort(arr.begin(),arr.end());

    int left = 0;
    int right = arr.size()-1;

    while(left<right){
        if(arr[left] + arr[right] == target) return true;
        else if(arr[left]+arr[right]>target) right--;
        else left++;
    }
    return false;

}

int main(){
    vector<int>nums = {11};
    int target = 16;
    bool myResult = TwoSum(nums,target);
    if(myResult) cout<<"Item found"<<endl;
    else cout<<"Item not found";
}
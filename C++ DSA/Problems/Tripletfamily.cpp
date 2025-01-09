#include<vector>
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

bool findTriplet(vector<int>&arr){
    int n = arr.size();
    sort(arr.begin(),arr.end());

    for(int i = n-1;i>0;i--){

        int left = 0;
        int right = n-2;

        while(left<right){

            if(arr[left] + arr[right] == arr[i]) return true;
            else if(arr[left] + arr[right] < arr[i]) left++;
            else right--;
        }
    }
    return false;

}

int main(){
    vector<int>result = {1,2,3,4,5};
    bool myResult = findTriplet(result);
    
    if(myResult) cout<<"Triplet Exists";
    else cout<<"Triplet Does not exist!";
    return 0;
}
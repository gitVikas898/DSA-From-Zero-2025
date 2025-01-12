#include<vector>
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int maxSumSubarray(vector<int>&arr){
    int n = arr.size();
    int currSum = 0;
    int maxSum = INT16_MIN;

    for(int i = 0;i<n;i++){
        currSum +=arr[i];
        maxSum = max(currSum,maxSum);

        if(currSum<0) currSum = 0;
    }

    return currSum;

}
#include <iostream>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

vector<int>findPermutation(vector<int>&arr){
    int n = arr.size();
    int pivot;

    for(int end = n-1;end>=0;end--){
        if(arr[end-1]<arr[end]){
            pivot = end-1;
        }
    }

    
}
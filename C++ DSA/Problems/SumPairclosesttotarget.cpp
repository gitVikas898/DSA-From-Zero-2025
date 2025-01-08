#include<iostream>
#include<bits/stdc++.h>
#include <vector>

using namespace std;

vector<int> sumClosest(vector<int> &arr, int target){

    int n = arr.size();
    sort(arr.begin(),arr.end());

    vector<int>result;

    int min_diff = INT_MAX;

    int left = 0;
    int right = n-1;

    while(left<right){

        int currSum = arr[left] + arr[right];

        if(abs(target-currSum)<min_diff){
            min_diff = abs(target-currSum);
            result = {arr[left],arr[right]};
        }

        if(currSum<target){
            left++;
        }
        else if (currSum>target){
            right--;
        }
        else {
            return result;
        }
    }
    return result;

}

int main(){
    vector<int>myarray = {10,30,20 ,5};
    int target = 25;

    vector<int>myresult = sumClosest(myarray,target);

    for(int val : myresult){
        cout<<val<<endl;
    }

    return 0;
}
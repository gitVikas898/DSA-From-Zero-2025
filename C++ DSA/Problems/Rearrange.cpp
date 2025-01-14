#include<iostream>
#include<vector>

using namespace std;

vector<int> reArrange(vector<int>&arr){
    int n = arr.size();
    vector<int>ans(n,0);

    int posIndex = 0,negativeIndex = 1;

    for(int i=0;i<n;i++){
        if(arr[i]<0){
            ans[negativeIndex] = arr[i];
            negativeIndex+=2;
        }else{
            ans[posIndex] = arr[i];
            posIndex+=2;
        }
    }

    return ans;
}

int main(){
    vector<int>inp = {3,1,-2,-5,2,-4};
    vector<int>myResult = reArrange(inp);
    for(int val : myResult){
        cout<<val<<",";
    }
    return 0;
}
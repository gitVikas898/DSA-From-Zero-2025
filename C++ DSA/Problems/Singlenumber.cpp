#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>&vec){
    int ans = 0;
    
    for(int val : vec){
        ans = ans^val;
    }
    return ans;
}

int main(){
    vector<int>nums = {4,1,2,1,2};
    cout<<singleNumber(nums)<<endl;
    return 0;
}
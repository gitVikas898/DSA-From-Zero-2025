#include<iostream>
#include<vector>
using namespace std;
int prefix_sum(vector<int>&arr , int start , int end){
    int n = arr.size();
    vector<int>prefix(n);

    prefix[0] = arr[0];


    for(int i = 1;i<n;i++){
        prefix[i] = prefix[i-1]+ arr[i];
    }
    if(start == 0){
        return prefix[end];
    }

    return prefix[end] - prefix[start-1];


}

int main(){
    vector<int>input = {2,4,3,6,7,8};
    int start = 1;
    int end = 3;

    int myResult = prefix_sum(input,start,end);
    cout<<"SUM between "<<start<< " & "<<end<<" is "<<myResult;
    return 0;
}
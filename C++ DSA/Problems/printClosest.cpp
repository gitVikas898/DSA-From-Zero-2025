#include<iostream>
#include<vector>
#include<bits/stdc++.h>

using namespace std;

vector<int> printClosest(vector<int>&num1 , vector<int>&num2,int k){

    int left = 0;
    int right = num2.size()-1;

    int diff = INT_MAX;
    int resultL ,resultR;


    while(left<num1.size() && right>=0){

       if( abs(num1[left]+num2[right]-k)<diff){
            resultL = left;
            resultR = right;
            diff = abs(num1[left]+num2[right]-k);
       }else if(abs(num1[left]+num2[right])>k){
            right--;

       }else{
            left++;
       }

    }

    return {num1[resultL],num2[resultR]};
   
}

int main(){

    vector<int>num1  = {1, 4, 5, 7};
    vector<int>num2  = {10, 20, 30, 40};
    int k = 32;
    vector<int> result = printClosest(num1,num2,k);
    for(int val : result){
        cout<<val<<endl;
    }
    return 0;

}
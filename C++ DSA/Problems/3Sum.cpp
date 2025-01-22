#include<iostream>
#include<bits/stdc++.h>

using namespace std;

vector<vector<int>>triplet(vector<int>&arr){
    int n = arr.size();

    set<vector<int>>st;
    for(int i =0;i<n;i++){
        for(int j = i+1;j<n;j++){
            for(int k=j+1;k<n;k++){
                if(arr[i]+arr[j]+arr[k] == 0){
                    vector<int>temp = {arr[i],arr[j],arr[k]};
                    sort(temp.begin(),temp.end());
                    st.insert(temp);
                }
            }
        }
    }
    vector<vector<int>>ans(st.begin(),st.end());
    return ans;
}

int main(){
    vector<int>input = {-1,0,1,2,-1,-4};
    vector<vector<int>>myresult = triplet(input);

    for (const auto& triplet : myresult) {
        for (int num : triplet) {
            cout << num << " ";
        }
        cout << endl;
    }

    return 0;
}
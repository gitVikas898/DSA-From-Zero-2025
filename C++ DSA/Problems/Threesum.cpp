#include<iostream>
#include<vector>
#include<unordered_map>
#include<unordered_set>
#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> findTriplet(vector<int>&arr){

   set<vector<int>> resSet;
   int n = arr.size();
   unordered_map<int,vector<pair<int , int>>> map; 

   for(int i=0;i<n;i++){
    for(int j = i+1;j<n;j++){
        map[arr[i]+arr[j]].push_back({i,j});
    }
   }
     for (const auto &entry : map) {
        cout << "Sum: " << entry.first << " -> Pairs: ";
        for (const auto &p : entry.second) {
            cout << "(" << p.first << ", " << p.second << ") ";
        }
        cout << endl;
    }

    for(int i = 0;i<n;i++){

        int complement = -arr[i];

        if(map.find(complement) != map.end()){
            vector<pair<int,int>> pairs = map[complement];

            for( auto p : pairs){
                if(p.first != i && p.second != i){
                    vector<int>curr = {i,p.first,p.second};
                    sort(curr.begin(),curr.end());
                    resSet.insert(curr);
                }
            }
        }

    }

    vector<vector<int>>res(resSet.begin(),resSet.end());
    return res;
}

void print2DVector(const vector<vector<int>> &vec) {
    for (const auto &v : vec) {
        cout << "[";
        for (size_t i = 0; i < v.size(); i++) {
            cout << v[i];
            if (i < v.size() - 1) cout << ", ";
        }
        cout << "] ";
    }
    cout << endl;
}

int main(){
    vector<int>myArray = {0, -1, 2, -3, 1};

    vector<vector<int>>myResult =  findTriplet(myArray);

    print2DVector(myResult);

    return 0;
}
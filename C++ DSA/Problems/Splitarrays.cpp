#include<vector>
#include<iostream>
#include<unordered_map>

using namespace std;
bool checkSplit(vector<int>&arr){
    unordered_map<int,int>map ;

    for(int val : arr){
        map[val] = map[val] +1;
    }

    for(auto &pair : map){
        if(pair.second > 2){
            return false;
        }
    }
    return true;
}

int main(){
    vector<int>myarray = {1,1,2,2,3,4};

    bool result = checkSplit(myarray);

    cout<<result<<endl;

    return 0;
}
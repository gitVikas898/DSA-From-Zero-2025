#include <iostream>
#include<vector>
#include<bits/stdc++.h>

using namespace std;

int main(){
    //Learning Containers 

    //Pairs 

    /*
    pair<int , int>p = {1,3};
    cout<<p.first<<endl;

    pair<string ,pair<int , int>>p1 = {"Score",{70,80}};
    cout<<p1.second.first<<endl; 

    pair<int,int> arr [] = {{2,3},{4,9},{11,13},{17,19}};

    cout<<arr[0].first;*/

    //iterators in vector 

    vector<int>vec = {1,2,3,4,5,6,7,8,9};

    
    for(auto val : vec){
        cout<<val<<" , ";
    }

    cout<<"\n";

    vector<int>::iterator it = vec.begin();

   

    vec.erase(it+1);

    for(auto val : vec){
        cout<<val<<" , ";
    }
        cout<<"\n";
    vec.insert(it+1,31);

     for(auto val : vec){
        cout<<val<<" , ";
    }

    return 0;
}
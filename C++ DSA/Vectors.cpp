#include<iostream>
#include<vector>

using namespace std;
int main(){
    cout<<"Hello Vectors"<<endl;

    //syntax 1

    vector<int>vec; //0
    vec.push_back(10);
    cout<<vec[0]<<endl;

    //syntax 2

    //vector<int>vec(3,0);  // 3 = size and and each index value will be = 0;

    vector<int>str = {'a','b','c','d','e','f'}; 

    // for each loop on vectors 

    for(char c :str){
        cout<<c<<endl;
    }

    // vector functions 
    //Size , pushback ,pop_back , front , back , at 

    cout<<"Size : "<<str.size()<<endl;

    str.push_back('g');


    cout<<"Size : "<<str.size()<<endl;

     for(char c :str){
        cout<<c<<endl;
    }

    str.pop_back();

    
     for(char c :str){
        cout<<c<<endl;
    }

    return 0;
}
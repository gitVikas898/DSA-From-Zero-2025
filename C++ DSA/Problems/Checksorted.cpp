//check sorted and rotated LC1752

#include<iostream>
#include<vector>

using namespace std;

bool check(vector<int>&arr){
    int n = arr.size();
    int drop = 0;

    for(int i =0;i<n;i++){
        if(arr[i]>arr[(i+1)%n]){
            drop++;
        }
    }

    return drop<=1;

}


int main(){
    vector<int>myArray = {3,2,1};

    bool myresult = check(myArray);
    cout<<myresult<<endl;
    return 0;
}

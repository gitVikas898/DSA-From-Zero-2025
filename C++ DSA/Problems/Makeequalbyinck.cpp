#include<iostream>
#include<vector>

using namespace std;


int minOps(vector<int>&arr ,int &k){

    int max = arr[0];

    // max element
    for(int i=0;i<arr.size();i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }

    int result = 0;

    //check if array elements can be made equal by k inc ops
    // IF (max-arr[i])%k == 0 true then calculate the operations using (max-a[i])/k
    for(int i = 0;i<arr.size();i++){
        if((max-arr[i])%k != 0){
            return -1;
        }else{
            result +=(max-arr[i])/k;
        }
    }

    return result;

}



int main(){
    vector<int>vec = {4, 4, 4, 2};
    int k = 2;
    int result = minOps(vec,k);

    cout<<result<<endl;

    return 0;
}
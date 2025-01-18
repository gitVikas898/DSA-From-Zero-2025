#include<bits/stdc++.h>
using namespace std;
vector<vector<int>>rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();

    for(int i =0;i<n-1;i++){
        for(int j=1;j<n;j++){
            swap(matrix[i][j],matrix[j][i]);
        }
    }

    return matrix;
}

int main(){
    
}
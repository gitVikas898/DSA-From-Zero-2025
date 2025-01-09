#include <iostream>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

bool fourSum(vector<int> &arr, int target)
{
    int n = arr.size();
    sort(arr.begin(), arr.end());
    for (int i = 0; i < n - 3; i++)
    {
        for (int j = i + 1; j < n - 2; j++)
        {

            int l = j + 1;
            int r = n - 1;

            while (l < r)
            {
                int requiredSum = arr[i] + arr[j] + arr[l] + arr[r];
                if (requiredSum == target)
                {
                    return true;
                    l++;
                    r--;
                }
                else if (requiredSum < target)
                {
                    l++;
                }
                else
                {
                    r--;
                }
            }
        }
    }
    return false;
}

int main()
{
    vector<int> input = {10, 20, 30, 40, 1, 2};
    int target = 91;

    bool myresult = fourSum(input, target);

    if (myresult)
        cout << "Four Sum Exists";
    else
        cout << "no four sum";
    return 0;
}
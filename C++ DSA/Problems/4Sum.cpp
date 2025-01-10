#include <iostream>
#include <vector>
#include <bits/stdc++.h>

using namespace std;


int fourSum(vector<int> &arr, int target)
{
    int count = 0;
    int n = arr.size();
    sort(arr.begin(), arr.end()); // Sort the array to use two-pointer technique

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
                    // Count all possible combinations between l and r
                    int leftCount = 1, rightCount = 1;

                    // Count duplicates on the left side
                    while (l + 1 < r && arr[l] == arr[l + 1])
                    {
                        leftCount++;
                        l++;
                    }

                    // Count duplicates on the right side
                    while (r - 1 > l && arr[r] == arr[r - 1])
                    {
                        rightCount++;
                        r--;
                    }

                    // Add the total combinations formed by these duplicates
                    count += leftCount * rightCount;

                    // Move the pointers
                    l++;
                    r--;
                }
                else if (requiredSum < target)
                {
                    l++; // Move left pointer to increase the sum
                }
                else
                {
                    r--; // Move right pointer to decrease the sum
                }
            }
        }
    }
    return count;
}

int main()
{
    vector<int> input = {1, 1, 1, 1, 1};
    int target = 4;

    int myresult = fourSum(input, target);

    cout<<myresult<<endl;
    return 0;
}
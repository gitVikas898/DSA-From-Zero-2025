#include <iostream>
#include <vector>

using namespace std;

int findEquilibrium(vector<int> &arr)
{
    int right_sum = 0;
    int n = arr.size();
    for (int i = 0; i < n; i++)
    {
        right_sum += arr[i];
    }

    int left_sum = 0;

    for (int i = 0; i < n; i++)
    {
        right_sum -= arr[i];

        if (right_sum == left_sum)
        {
            return i;
        }

        left_sum += arr[i];
    }
    return -1;
}

int main()
{
    int t;
    cout << "Enter number of test cases: ";
    cin >> t;

    while (t > 0)
    {
        int n;
        cout << "Enter number of elements: ";
        cin >> n;

        vector<int> input(n);

        cout << "Enter " << n << " elements:" << endl;
        for (int i = 0; i < n; i++)
        {
            cin >> input[i]; // Assign values directly using the index
        }

        int myResult = findEquilibrium(input);

        if (myResult != -1)
        {
            cout << "Equilibrium point is at index: " << myResult << endl;
        }
        else
        {
            cout << "No equilibrium point found." << endl;
        }

        t--;
    }

    return 0;
}
function merge(arr) {
    const n = arr.length;

    // Determine the mid-point
    const mid = Math.floor(n / 2);

    // Split the array into two halves
    const a = arr.slice(0, mid);
    const b = arr.slice(mid);

    let l = 0; // Pointer for `a`
    let m = 0; // Pointer for `b`
    let k = 0; // Pointer for merged array

    // Merge the two arrays into `arr`
    while (l < a.length && m < b.length) {
        if (a[l] <= b[m]) {
            arr[k] = a[l];
            l++;
        } else {
            arr[k] = b[m];
            m++;
        }
        k++;
    }

    // Copy remaining elements from `a` (if any)
    while (l < a.length) {
        arr[k] = a[l];
        k++;
        l++;
    }

    // Copy remaining elements from `b` (if any)
    while (m < b.length) {
        arr[k] = b[m];
        k++;
        m++;
    }

    return arr;
}

// Example usage
console.log(merge([1, 4, 5, 2, 6, 7, 9])); // Input should ideally be two sorted halves.

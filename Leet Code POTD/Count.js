function countDivisibleSubstrings(s) {
    let count = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let num = 0;
        let lastDigit = parseInt(s[i]);

        if (lastDigit === 0) continue; // Skip substrings that end in '0'

        for (let j = i; j < n; j++) {
            num = num * 10 + parseInt(s[j]); // Construct number
            if (num % lastDigit === 0) count++;
        }
    }

    return count;
}

// Example Test Case
console.log(countDivisibleSubstrings("12936")); // Expected Output: 11

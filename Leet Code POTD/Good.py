def sumOfGoodElements(nums, k):
    total = 0
    n = len(nums)
    for i in range(n):
        is_good = True
        # Check left neighbor i - k
        left = i - k
        if left >= 0:
            if nums[i] <= nums[left]:
                is_good = False
        # Check right neighbor i + k
        right = i + k
        if right < n:
            if nums[i] <= nums[right]:
                is_good = False
        if is_good:
            total += nums[i]
    return total

    
print(sumOfGoodElements([1,3,2,1,5,4],2))
from typing import List # this is used to add type hints for List type

def get_sum(nums: List[int]) -> int:
    numSum = 0
    for num in nums:
        numSum += num
    return numSum
    # return sum(nums)

def get_min(nums: List[int]) -> int:
    minNum = nums[0]
    for num in nums:
        if num < minNum:
            minNum = num
    return minNum
    # return min(nums)

def get_max(nums: List[int]) -> int:
    maxNum = 0
    for num in nums:
        if num > maxNum:
            maxNum = num
    return maxNum
    # return max(nums)

# do not modify below this line
print(get_sum([1, 2, 3, 4, 5]))
print(get_sum([5, 4, 5, 6]))

print(get_min([7, 3, 4, 5]))
print(get_min([5, 4, 5, 6]))

print(get_max([7, 3, 4, 5]))
print(get_max([5, 4, 5, 6]))

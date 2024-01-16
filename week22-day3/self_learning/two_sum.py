# 2 <= nums.length <= 103
# -109 <= nums[i] <= 109
# -109 <= target <= 109


def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    check_params(nums, target)
    for i, num in enumerate(nums):
        for j, n in enumerate(nums):
            if i == j:
                continue
            if num + n == target:
                return [i, j]


def check_params(nums, target):
    if 2 > len(nums) > 103 or -109 > target > 109:
        raise Exception('wrong params')
    check_nums(nums)


def check_nums(nums):
    for num in nums:
        if -109 > num > 109:
            raise Exception('wrong params')


print(twoSum([2, 7, 11, 15], 9))  # [0, 1]
print(twoSum([3, 2, 4], 6))  # [1, 2]

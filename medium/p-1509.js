// 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
// Medium
// Topics
// Companies
// Hint
// You are given an integer array nums.

// In one move, you can choose one element of nums and change it to any value.

// Return the minimum difference between the largest and smallest value of nums after performing at most three moves.



// Example 1:

// Input: nums = [5,3,2,4]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 2 to 3. nums becomes [5,3,3,4].
// In the second move, change 4 to 3. nums becomes [5,3,3,3].
// In the third move, change 5 to 3. nums becomes [3,3,3,3].
// After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.
// Example 2:

// Input: nums = [1,5,0,10,14]
// Output: 1
// Explanation: We can make at most 3 moves.
// In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
// In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
// In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
// After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 1.
// It can be shown that there is no way to make the difference 0 in 3 moves.
// Example 3:

// Input: nums = [3,100,20]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 100 to 7. nums becomes [3,7,20].
// In the second move, change 20 to 7. nums becomes [3,7,7].
// In the third move, change 3 to 7. nums becomes [7,7,7].
// After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0.

var minDifference = function (nums) {
    if (nums.length <= 4) {
        return 0;
    }
    else {
        nums.sort((a, b) => a - b);
        const length = nums?.length;
        let dif1 = Math.abs(nums[length - 4] - nums[0]); // remove the 3 maximum numbers;
        let dif2 = Math.abs(nums[length - 3] - nums[1]); // remove the 2 maximum and 1 minimum numbers;
        let dif3 = Math.abs(nums[length - 2] - nums[2]); // remove the 1 maximum and 2 minimum numbers;
        let dif4 = Math.abs(nums[length - 1] - nums[3]); // remove the 3 minimum numbers;
        return Math.min(dif1, dif2, dif3, dif4);
    }
};

// second method
var minDifference2 = function(nums) {
    if (nums.length <= 4) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let ans = nums[nums.length - 1] - nums[0];
    for (let i = 0; i <= 3; i++) {
        ans = Math.min(ans, nums[nums.length - (3 - i) - 1] - nums[i]);
    }
    return ans;
};

console.log(minDifference([53, 60, 100, 85, 16, 68, 64, 31, 37, 78]));
console.log(minDifference2([53, 60, 100, 85, 16, 68, 64, 31, 37, 78]));
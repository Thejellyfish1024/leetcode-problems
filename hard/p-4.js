// 4. Median of Two Sorted Arrays
// Hard
// Topics
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// 
// var findMedianSortedArrays = function (nums1, nums2) {
//     let arr = [...nums1, ...nums2]
//     arr.sort((a, b) => a - b)
//     if (arr?.length % 2 === 0) {
//         return (arr[(arr?.length / 2) - 1] + arr[arr?.length / 2]) / 2;
//     }
//     return (arr[Math.ceil((arr?.length / 2) - 1)]);
// };

// another better solution
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length,
        n = nums2.length;
    let p1 = 0, // 1
        p2 = 0; // 1
        // [1,3,5], [2,4]
    let getMin = function () {
        if (p1 < m && p2 < n) {
            return nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
        } else if (p1 < m) {
            return nums1[p1++];
        } else if (p2 < n) {
            return nums2[p2++];
        }
        return -1;
    };

    if ((m + n) % 2 === 0) {
        for (let i = 0; i < (m + n) / 2 - 1; ++i) {
            let val =  getMin();
            console.log("value", val);
        }
        return (getMin() + getMin()) / 2.0; // 3 + 4
    } else {
        for (let i = 0; i < Math.floor((m + n) / 2); ++i) {
            let val =  getMin();
            console.log("value", val);
        }
        return getMin();
    }
};

console.log(findMedianSortedArrays([1,3,5], [2,4]));
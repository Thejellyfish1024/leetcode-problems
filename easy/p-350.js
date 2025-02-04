// 350. Intersection of Two Arrays II
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.



// var intersect = function (nums1, nums2) {
//     if (nums1.length <= nums2.length) {
//         return nums1.reduce((prev, cur) => nums2.some(a => a === cur) ? [...prev, cur] : prev, []);
//     }
//     else {
//         return nums2.reduce((prev, cur) => nums1.some(a => a === cur) ? [...prev, cur] : prev, []);
//     }
// };

// console.log(intersect([3,1,2], [1,1]));

// var intersect = function (nums1, nums2) {
//     let final = [];
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if(nums1[i] === nums2[j]){
//                 final.push(nums1[i])
//                 nums2[j] = "";
//                 break;
//             }
//         }
//     }
//     return final;
// };
// console.log(intersect([1,2,2,1], [2,2]));
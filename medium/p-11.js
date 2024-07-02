// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// var maxArea = function (height) {
//     let l = 4;
//     let maxVal = height[0] * height[1];
//     let maxIndex = [height[0], height[1]]
//     for (let i = 0; i < height.length; i++) {
//         for (let j = 1; j < height.length; j++) {
//             const area = Math.abs(i-j) * l * height[i] * height[j];
//             if (area > maxVal) {
//                 maxIndex = [height[i], height[j]];
//                 maxVal = area;
//             }
//         }
//     }

//     return maxIndex[0] <= maxIndex[1] ? maxIndex[0]*maxIndex[0] : maxIndex[1]*maxIndex[1] ;

// };

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the current area
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentArea = width * currentHeight;

        // Update maxArea if currentArea is larger
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }

        // Move the pointer of the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxArea([1,2,1]));
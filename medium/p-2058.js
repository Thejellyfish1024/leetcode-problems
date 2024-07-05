// 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
// Medium
// Topics
// Companies
// Hint
// A critical point in a linked list is defined as either a local maxima or a local minima.

// A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

// A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

// Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

// Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].



// Example 1:


// Input: head = [3,1]
// Output: [-1,-1]
// Explanation: There are no critical points in [3,1].
// Example 2:


// Input: head = [5,3,1,2,5,1,2]
// Output: [1,3]
// Explanation: There are three critical points:
// - [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
// - [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
// - [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
// The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
// The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.
// Example 3:


// Input: head = [1,3,2,2,3,2,2,2,7]
// Output: [3,3]
// Explanation: There are two critical points:
// - [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
// - [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
// Both the minimum and maximum distances are between the second and the fifth node.
// Thus, minDistance and maxDistance is 5 - 2 = 3.
// Note that the last node is not considered a local maxima because it does not have a next node.

// array method
// var nodesBetweenCriticalPoints = function (head) {
//     let criticalPoints = [];
//     for (let i = 1; i < head.length - 1; i++) {
//         if (
//             (head[i - 1] < head[i] && head[i] > head[i + 1]) ||
//             (head[i - 1] > head[i] && head[i] < head[i + 1])
//         ) {
//             criticalPoints.push(i + 1);
//         }

//     }
//     if (criticalPoints.length < 2) return [-1, -1];
//     else {
//         let distances = [];
//         for (let i = 0; i < criticalPoints.length; i++) {
//             for (let j = 0; j < criticalPoints.length; j++) {
//                 if (i !== j) {
//                     distances.push(Math.abs(criticalPoints[i] - criticalPoints[j]))
//                 }
//             }
//         }
//         return [Math.min(...distances), Math.max(...distances)];
//     }
// };

// console.log(nodesBetweenCriticalPoints(head = [5, 3, 1, 2, 5, 1, 2]));

//linked list method
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var nodesBetweenCriticalPoints = function (head) {
    if (!head || !head.next || !head.next.next) return [-1, -1];

    let index = 1;
    let prev = head;
    let curr = head.next;
    let criticalPoints = [];

    while (curr.next) {
        let next = curr.next;
        if ((curr.val > prev.val && curr.val > next.val) || (curr.val < prev.val && curr.val < next.val)) {
            criticalPoints.push(index);
        }
        prev = curr;
        curr = next;
        index++;
    }

    if (criticalPoints.length < 2) return [-1, -1];

    let minDistance = Infinity;
    for (let i = 1; i < criticalPoints.length; i++) {
        minDistance = Math.min(minDistance, criticalPoints[i] - criticalPoints[i - 1]);
    }
    let maxDistance = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];

    return [minDistance, maxDistance];
};

// Test case
let head = new ListNode(5, new ListNode(3, new ListNode(1, new ListNode(2, new ListNode(5, new ListNode(1, new ListNode(2)))))));
console.log(nodesBetweenCriticalPoints(head)); // Output: [1, 3]



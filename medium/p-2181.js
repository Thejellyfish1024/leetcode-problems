// 2181. Merge Nodes in Between Zeros
// Medium
// Topics
// Companies
// Hint
// You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

// Return the head of the modified linked list.



// Example 1:


// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 3 + 1 = 4.
// - The sum of the nodes marked in red: 4 + 5 + 2 = 11.
// Example 2:


// Input: head = [0,1,0,3,0,2,2,0]
// Output: [1,3,4]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 1 = 1.
// - The sum of the nodes marked in red: 3 = 3.
// - The sum of the nodes marked in yellow: 2 + 2 = 4.

var mergeNodes = function (head) {

    let length = head?.length;
    let init = 0;
    let zeros = 2;
    for (let i = 1; i < length; i++) {
        if (head[i] === 0) {
            init++;
            zeros++;
        }
        head[init] += head[i]
        head[i] = 0;

    }
    for (let i = 0; i < length; i++) {
        if (head[head?.length - 1] === 0) head.pop();
    }
    return head;
};

console.log(mergeNodes(head = [0, 1, 0, 3, 0, 2, 2, 0]));


// second answer

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeNodes = function(head) {
    let dummy = new ListNode(0);
    let current = dummy;
    let sum = 0;
    
    // Skip the initial zero
    head = head.next;
    
    while (head !== null) {
        if (head.val === 0) {
            // When encountering a zero, create a new node with the sum
            current.next = new ListNode(sum);
            current = current.next;
            sum = 0; // Reset the sum for the next segment
        } else {
            sum += head.val;
        }
        head = head.next;
    }
    
    return dummy.next;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array (for testing purposes)
function linkedListToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Test cases
let head1 = createLinkedList([0, 3, 1, 0, 4, 5, 2, 0]);
let mergedHead1 = mergeNodes(head1);
console.log(linkedListToArray(mergedHead1)); // Output: [4, 11]

let head2 = createLinkedList([0, 1, 0, 3, 0, 2, 2, 0]);
let mergedHead2 = mergeNodes(head2);
console.log(linkedListToArray(mergedHead2)); // Output: [1, 3, 4]
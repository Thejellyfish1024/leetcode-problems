// 3110. Score of a String

// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:
// Input: s = "hello"
// Output: 13
// Explanation:
// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:

// Input: s = "zaz"
// Output: 50
// Explanation:
// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

// method 1
// var scoreOfString = function (s) {
//     let sum = 0;
//     for (let i = 0; i < s.length - 1; i++) {
//         sum += Math.abs(s[i].codePointAt(0) - s[i + 1].codePointAt(0));
//     }
//     return sum;
// };

// method 2
var scoreOfString = function (s) {
    if (s.length === 1) return 0;
    return (Math.abs((s[s.length - 1].codePointAt(0)) - (s[s.length - 2].codePointAt(0)))) + scoreOfString(s.slice(0, s.length - 1))
};

console.log(scoreOfString("zaz"));

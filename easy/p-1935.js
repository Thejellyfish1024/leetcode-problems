// 1935. Maximum Number of Words You Can Type

// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.



// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:

// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:

// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.

// method 1
// var canBeTypedWords = function (text, brokenLetters) {
//     const textArr = text.split(" ");
//     let broke = 0;
//     for (let i = 0; i < textArr.length; i++) {
//         for (let j = 0; j < brokenLetters.length; j++) {
//             if (brokenLetters[j] !== "" && textArr[i].includes(brokenLetters[j])) {
//                 broke++;
//                 break;
//             }
//         }

//     }
//     return textArr.length - broke;
// };

//method 2
// var canBeTypedWords = function (text, brokenLetters) {
//     let word = text.split(" ");
//     return word.reduce((acc, curr) => acc + !curr.match("[" + brokenLetters + "]\+"), 0);
// };
//method 3
function canBeTypedWords(text, brokenLetters) {
    return text.split(' ').reduce((prev, cur) => brokenLetters.split('').some(a => cur.indexOf(a) > -1) ? prev : prev + 1, 0);
}

console.log(canBeTypedWords("hello world", "ad"));
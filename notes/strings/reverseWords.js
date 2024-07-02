// Reverse the words of the given string
// Input : "the sky is blue" || Output : "blue is sky the"

const reverseString = (str) => {
    const final = str.split(" ").reverse().filter(s => s !== "").join(" ");
    return final;
}

console.log(reverseString("the sky is blue"));
console.log(reverseString("   Let's code    Rahim   "));
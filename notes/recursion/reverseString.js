// Input : hello || Output : olleh

const reverseString = (str) => {
    if (str?.length === 1) return str;
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString("rahim"));


// another method
const reverseString2 = (str) => {
    if (str?.length === 1) return str;
    return  reverseString2(str.substr(1)) + str.charAt(0); // str.charAt(0) === str[0]
}

console.log(reverseString2("hello"));
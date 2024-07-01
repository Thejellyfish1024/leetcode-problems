// Question : Create an array with range of given numbers
// Input : start = 1 and end = 5 || Output : [1,2,3,4,5]

const arrayOfGivenRange = (start, end) => {
    if (end < start) return [];
    else {
        const arr = arrayOfGivenRange(start, end - 1);
        arr.push(end);
        return arr;
    }
}

console.log(arrayOfGivenRange(1, 5));
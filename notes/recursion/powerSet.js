// Return the power set or set of all the sub sets of the given array
// Input : [1,2,3] || Output : [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

const powerSet = (arr) => {
    let result = [];
    if (arr.length === 0) return [[]];
    let temp = [];

    const recursive = (arr, i = 0) => {
        if (i === arr.length) return result.push([...temp]);
        temp.push(arr[i])
        recursive(arr, i + 1)
        temp.pop()
        recursive(arr, i + 1)
    }
    recursive(arr);
    return result;
}

console.log(powerSet([1,2,3]));
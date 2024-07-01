// Fibonacci series = 0 1 1 2 3 5 8 13 21 34 55 ....
// Input : 6 || Output : 8

const fibonacciNumber = (num) => {
    if (num <= 1) return num;
    else {
        return fibonacciNumber(num - 1) + fibonacciNumber(num - 2)
    }
}

console.log(fibonacciNumber(8));
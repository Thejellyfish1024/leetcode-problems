// check if the given parenthesis are valid or not;

const isValidParenthesis = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
        }

        else if (stack.length !== 0 && (str[i] == ")" || str[i] == "}" || str[i] == "]")) {
            let last = stack[stack.length - 1];
            if (
                (str[i] === ")" && last === "(") ||
                (str[i] === "}" && last === "{") ||
                (str[i] === "]" && last === "[")
            ) {
                stack.pop();
            }
            else return false;
        }

    }
    return stack.length === 0;
}

console.log(isValidParenthesis("([{}])"));
const num = [1, 2, 55, 225, 56, 2656, 450];
const maxFunction = (arr) => {
    return arr.reduce(function (pre, cur) {
        return pre > cur ? pre : cur;
    });
};

console.log(maxFunction(num)); // Output: 2656

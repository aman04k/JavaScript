function findMissingNumber(arr) {
    const n = arr.length + 1;
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

const arr = [1,  3, 4];
console.log(findMissingNumber(arr)); // Output: 4

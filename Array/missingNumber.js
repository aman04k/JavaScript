let n = [1, 2, 3, 5];
let sum = 0;
let total = (n.length * (n.length + 1)) / 2;

for (let i = 0; i < n.length; i++) {
    sum = sum + n[i];
}

let miss = total - sum;
console.log(miss); // Output: 4

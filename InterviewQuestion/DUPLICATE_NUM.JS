const str = [1, 2, 3, 4, 1, 2,4, 5];

function aman(str) {
    const ans = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j] && !ans.includes(str[i])) {
                ans.push(str[i]);
            }
        }
    }

    return ans;
}

console.log(aman(str));
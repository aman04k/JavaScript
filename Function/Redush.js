let a =[1,4,2,5,6];
let total =0;
for(let value of a)
total += value; 
console.log(total);

//Reduse Method

let arr = [1,4,5,2];
let totalSum=arr.reduce((accumulator,currentValue) => accumulator+currentValue, 0);
console.log("Printing value");
console.log(totalSum);
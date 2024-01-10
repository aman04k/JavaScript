
function run(){
    console.log("Running");
}
// function call or invoke karna
run();

//function assigment
let stand = function walk(){
    console.log ("woking ");
}
stand();


function sum(a,b){
    return a+b;
}
console.log(sum(45,56));


// dynamic argument
function add(n,m){
    let total =0;
    for(let value of arguments)
    total = total +value;
 return total;
}

let ans=add(1,2,3,5,6);
console.log(ans);
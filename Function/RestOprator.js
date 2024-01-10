function sum(number, ...args){
    console.log(args);
}
sum(1,2,2,54,2,5);

//Default Parameters
function interest(p,r,y){
    return p*r*y/100;
}
console.log(interest(10,10,10))
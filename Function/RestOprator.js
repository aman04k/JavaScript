function sum(number, ...args){
    console.log(args);
}
sum(1,2,2,54,2,5);

//Default Parameters

//Simple Interest 
function interest(p,r,y){
    return p*r*y/100;
}
//console.log(interest(10,10,10))


////    GETTER SETTER ////** */

//get ter ->access properties
//setter ->change or mutate properties
let eperson = {
    fName : 'Love',
    lName : 'Babber'
};
function fullName(){
    return '${person.fName}        ${person.lName}';
}
console.log(fullName());

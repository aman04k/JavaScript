// Basic logic  FIRST LOGIC(1)

/*var sum = function(a){
console.log("Live Viewers "+ a);
var c=4;
return function(b){
    return a+b+c;
}
}
var store=sum(200);
console.log(store(5)) */

//SECOND LOGIC(2)
 var sum=function(a,b,c){
    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
 }

 var store=sum(3,4,5);
 console.log(store.getSumTwo())
 console.log(store.getSumThree())




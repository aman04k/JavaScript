//Facory Function

/*function createRectangle(len, bre) {
    return rectangle = {
        length: len,
        breadth: bre, 

        draw() {
            console.log('drawing rectanfgle');
        }
    };
    

}

let rectangleObj1 = createRectangle(4, 6);
let rectangleObj2 = createRectangle(4, 6);
let rectangleObj3 = createRectangle(4, 6);
*/

//Constructor Function => Pro/Method ko -> intialise / define karta hai 

/*
function Rectangle(len, bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}
*/
//boject creation using constructor function

/*let rectangleObj = new Rectangle(4,6);
rectangleObj.color='Red';
console.log(rectangleObj);
*/
// delete

// delete rectangleObj.color;
// console.log(rectangle.Object);


// OBJECT CLONE => #1

/*let src ={
    a:10,
    b:45,
    c:42,
};
let dest = {};
for(let key in src){
    dest[key]=src[key];
}
console.log(dest);
src.a++;
console.log(dest);*/
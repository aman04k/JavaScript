console.log(' Hello Aman ');

let number=[1,2,3,4];
console.log(number);


//INSERT VALUE IN ARRAY
//END==> last number add karna

number.push(9);
console.log(number);

//Begin==> First me number add karna

number.unshift(25);
console.log(number);

//find the index element
console.log(number.indexOf(4));

//agr index me element se jada hai to output -1 aa jayega
console.log(number.indexOf(40));


//Emptying an array

let name1=[1,2,3,4,5];
let name2=name1;
name1=[]; 
console.log(name1);
console.log(name2);

//Combing and slicing array
 let first=[1,2,3,4];
 let second = [4,5,6,8];
 let combined=first.concat(second);
 console.log(combined);

 let sliced=combined.slice(3,6 );
 console.log(sliced);

 // Spread Opreator meand that combine to array
  let combined1=[...first, ...second];
  console.log(combined1); 

  // Iterating an array

  let arr=[10,20,30,40,50];
  for(let value of arr){
    console.log(value);
  }

  // Joining an Array
  
  let number3=[10,20,30,40];
  const joined=number3.join(',');
  console.log(joined);

  //Split Method

  let message='This is my first message';
  let parts=message.split(' ');
  console.log(parts);

  //Filter an Array
   let number5=[1,2,3,-5,8,-9];
   let filtered=number5.filter(function(value){
    return value >=0;
   }
   )
   console.log(filtered);

   // Map an Array

   let number2=[7,8,5,6,2];
   let items=number2.map(
    function(value){
        return 'student_no' + value;
    }
   )
   console.log(items);
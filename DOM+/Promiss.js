//  let meraPromise=new Promise(function(resolve, reject)
//  {
//      setTimeout(function()
//      {
//          console.log('I am inside');
//      }, 5000);
//      resolve(2022);
//      //reject(new Error('kucch error aaya hai'))
//  });

// meraPromise.then((value) => {console.log(value)});
//  console.log('Pehla');


// // Async Function  
// async function abcd(){
//     return 5;
// }


async function aman(){
 
let delhi = new Promise((resolve,reset)=>{
    setTimeout(()=>{
        console.log("delhi me bahut garmi hai")
    },1000);
});

let Noida = new Promise((resolve,reset)=>{
    setTimeout(()=>{
        console.log("noida is very cool")
    },2000);
});

return [delhi, Noida];

}



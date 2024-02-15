
const num=[1,2,3,55,88,57];
const maxFunction=(arr)=>{
          return arr.reduce(function(pre,cur){
                    return pre>cur ? pre:cur
          });
};

console.log(maxFunction(num));
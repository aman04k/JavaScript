function factorial(num){
   if(num==0 || num==1){
          return 1;
   }
   else if(num<0){
          return 'undefine'
   }
   else {
          let ans=1;
          for(let i=2; i<=num; i++){
           ans *=i;
          }
          return ans;
   }
}

console.log(factorial(5));
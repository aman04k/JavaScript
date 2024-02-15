const num=[1,2,3,4,5,8,10];
const missNumber =[];
const missingValue=(arr) =>{
          const minValue=Math.min(...arr);
          const maxValue=Math.max(...arr);
          for(let i=minValue; i<maxValue; i++){
                    if(arr.indexOf(i)<0){
                              missNumber.push(i);
                    }
          }
          return missNumber;
}
console.log(missingValue(num));
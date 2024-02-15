const number=[1,2,3,4,5,1,2];
const duplicate=number.filter((Element,index,arr) =>
arr.indexOf(Element) != index
)
console.log(duplicate);
 let num = [1,2,3,4,5,1,2,3];
 let duplicate=num.filter((Element,index,arr) => arr.indexOf(Element) != index)
 console.log(duplicate);
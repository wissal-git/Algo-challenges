/*
function Occurances(arr)
{   //let OccCount =[];
    let count=0;
    for(i=0;i<arr.length;i++)
    {  
       for (j=1;j<arr.length-1;j++)
       {
        if (arr[i] == arr[j])
        {   count+=1
           // OccCount=
        }
       }
       console.log(arr[i] + count);
    }
}
console.log(Occurances(['wissal','wissal','nader']));

/**
 *  ! important Link 
 *  * https://bobbyhadz.com/blog/javascript-count-occurrences-of-each-element-in-array
 * 
 *  */ 
/*const arr =['a','b','a','c','a']

let count = 0;
for(const element of arr)
{
    if(element)
    {
        count +=1;
    }else {
        count =1;
    }
    console.log(count);
}
*/



const arr = [1, 1, 1, 2, 3, 3];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
//output=Object.values(count).join(' ');
console.log(count); // 👉️ {1: 3, 2: 1, 3: 2}
const getMax = Object.keys(count)
   .filter(x => {
             return count[x] == Math.max.apply(null, 
             Object.values(count));
   })
console.log(getMax.join(' '));
/** * 
 * * Getting key with the highest value from object
 * const getMax = Object.keys(object)
   .filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
   })
var object = { orange: 3, blue: 3, green: 1}
console.log(getMax) // ['orange', 'blue']
 */

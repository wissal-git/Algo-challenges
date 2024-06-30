//* really wrong because simple sort  [2,10] 210
/* 
function largestNumber(arr)
{   
    largestNumber= [];
    arr.sort(function (a, b) { return b - a });
    for (i=0;i<=arr.length;i++)
    {
        if(arr[i] > 0){ 
            largestNumber.push(arr[i]);
        }
    }
    return largestNumber;

}
console.log(parseInt(largestNumber([2,5,1,-1,9]).join('')));*/
//console.log([1,2,3].join(''));
function findLargest(arr)
{   //let i=0;
    
    let value1= [];
    let value2=[];
    for(i=0;i< arr.length;i++)
    {  let j=i+1;
       value1.push(arr[i],arr[j]);
       value2.push(arr[j],arr[i]);
       break;
       
         
    }
    console.log(value1)
    console.log(value2)
    
    //return value1,value2;
}
findLargest([1,2,3])
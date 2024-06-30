//* method 1 not optimized order n**

function findPairs(arr, sum) {
    var pairs = [];
    for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === sum)
    pairs.push([arr[i], arr[j]]);
    }
    }
    return pairs;
   }
console.log(findPairs([1,5,8,4,7,3],10))  

//* method 2 
function sums(arr,sum)
{
    let pairs =[];
    let numList =[];
    for (let i =0;i<arr.length;i++)
    {   let currNum =arr[i];
        let diff =sum-currNum;
        if(numList.includes(diff))
        {
            pairs.push([currNum, diff]);
        }
        numList.push(currNum);
    }
    console.log(numList);
    return pairs;

}
let sum=11;
let arr = [5,6,7,8,9]
console.log(sums(arr,sum))
//console.log(numList);

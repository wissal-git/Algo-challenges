//Function to find a continuous sub-array which adds up to a given number.
function subarraySum(arr, n, s)
    {
        //your code here
        for (let i=0;i<n;i++)
        {
            let currentSum =arr[i];
            if(currentSum == sum )
            {
                console.log("sum found at index" +i);
            }
            else {
                //try all subarrays starting with 'i'
                for (let j= i+1 ;j <n;j++)
                {
                     currentSum += arr[j];
 
                if (currentSum == sum) {
                    console.log("Sum found between indexes "
                         + i + " and " +j);
                    return;
                }
            }
        }
        
    }
    console.log("No subarray found");

}
let arr1 = [1,2,3,7,5];
let n = arr1.length;
let sum = 12;
console.log(subarraySum(arr1, n, sum));
//*************************************************************



//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
*/

class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        //your code here
        let i=0;
       let current_sum=0;
        for(let j=0;j<=n;j++)
        {
           current_sum+=arr[j];
           while(current_sum>s)
           {
               current_sum-=arr[i++];
           }
           if(current_sum==s && i<=j)
           {
               return[i+1,j+1];
           }
        }
        return[-1];
    }
}
function RunningSum(arr)
{  
    for(i=1;i<arr.length;i++)
    {   
        arr[i]=arr[i]+arr[i-1];
    }
    return arr;
}
console.log(RunningSum([1,8,5]));
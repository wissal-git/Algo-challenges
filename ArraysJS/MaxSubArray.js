function MaxSubarray(nums)
{
    let max=nums[0];
    let sum= nums[0];
    for(let i=1;i<nums.length;i++)
    {
        if(sum+nums[i]>nums[i])
        {
            sum+=nums[i];
        }else{
            sum=nums[i];
        }
        max=Math.max(max,sum);
    }
    return max;
};
console.log(MaxSubarray([1,2,-1,5]));
/*
function MajorityElement(arr)
{   let countOcc= 0;
    for(i=0;i<arr.length;i++)
    {
       if (arr[i]== arr[i+1])
       {
        countOcc+=1;
        console.log(arr[i]);
       }

    }
   /* if(countOcc >= Math.floor(arr.length ) )
       {
        console.log(arr[i]);
       }*/
      //return arr[i]
//}
//console.log(MajorityElement([2,2,1,1,1,2,2]))*/
//******************************************** */
var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    return  getMax = Object.keys(obj)
     .filter(x => {
          return obj[x] == Math.max.apply(null, 
          Object.values(obj));
          });
};
console.log(majorityElement([1,1,2,4,4,8,8,7,11,1,1]).join(' '));

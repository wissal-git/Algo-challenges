/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var removeDuplicates = function(nums) {
    var len = nums.length;
    var index = 0;
    var last = NaN;
    var times = 0;
    for (var i = 0; i < len; i++) {
      if (nums[i] === last) {
        if (times < 2) times++;
        else continue;
      } else {
        times = 1;
      }
      last = nums[i];
      nums[index] = nums[i];
      index++;
    }
    return index;
  };
  console.log(removeDuplicates([1,1,1,1,2,2,3]))
  */
 function removeDuplicates(nums)
 {
    //1 1 1 -> duplicates
    //1 1 -> no duplicates
    //O(N)
    /**
     * 1 1 1 -> duplicates
     * 1 1 -> no duplicates
     * O(N)
     * record the pivot points
     * record the prev number and the prev prev number
     */
    if(nums.length <= 2) return nums.length;
    let prev1 = nums[0],
        prev2 = nums[1];
    let pivot =2;
    for (let i=2;i<nums.length;i++)
    {
        //check if the curr number is a duplicate
        const curr = nums[i];
        if(curr !=prev1 || curr != prev2)
        {
            nums[pivot] = curr;
            pivot +=1;
        }
        //update prev1,prev2
        prev1=prev2;
        prev2=curr;
    }    
    //return pivot;
    return nums;
 }
 //console.log(removeDuplicates([1,1,1,1,2,3,5,5]))

//* --------------------best one so far -----------
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = (nums) => {
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] && nums[i - 1] === nums[i - 2]) {
            //remove at index i 1 element
            nums.splice(i, 1);
            i--;
        }
    }

    return nums;
};
console.log(removeDuplicates2([1,1,1,1,2,2,2,3,3]))


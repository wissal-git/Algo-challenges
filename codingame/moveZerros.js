var moveZeroes = function(nums) {
    var i, temp;

    for (i = 0; i < nums.length-1; i++) {
        if(nums[i] === 0) {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return null;
};
console.log(moveZeroes([1,0,3,0,15]));
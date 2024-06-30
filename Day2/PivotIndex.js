/* * my try 
function pivotIndex(arr){
    //* case 1 : length of array  < 3 
    if(arr.length <3) return -1 ;
    //* case 2 :length of array = 3 check right side
    else if(arr.length == 3 && 0 == (arr[1]+arr[2])) return 0 ;
    else {
        for(i=2;i<arr.length;i++)
        { 
            if((arr[i]+arr[i+1]+arr[i+2] )== (arr[i+4]+arr[i+5]))
        {
            console.log(arr[i]);
        }
        }
    }
}
console.log(pivotIndex([2,1]))*/

//* al hamdullilah i'll be ok

//* online solution 
var pivotIndex = function(nums) {
    var sum, count = 0;

    if (nums === null || nums.length === 1) return -1
    sum = nums.reduce((a, b) => a + b);

    for (let i = 0; i < nums.length; i++) {
        if (!nums[i-1]) nums[i-1] = 0;
        count += nums[i-1];
        sum -= nums[i];
        if (sum === count) return i;
    }
    return -1
    //return sum;
};
console.log(pivotIndex([1,7,3,6,5,6]))
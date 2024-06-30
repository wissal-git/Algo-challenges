/**
 * @param {number[]} nums
 * @return {number}
 */
//* works fine but could be better 
var thirdMax = function(nums) {
    if(nums.length <= 2) {
        return Math.max(...nums);}
    else if (nums.length >= 3)
    {
         newArray =nums.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
            })
            newArray.sort((a, b) => b-a);
            if (newArray.length <=2 ){
                return Math.max(...nums);}
            
    }
    return newArray[2];
};
console.log(thirdMax([2,2,3,1]))
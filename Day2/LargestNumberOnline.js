var largestNumber = function(nums) {
    if( nums.length == 0 ) {
        return '';
    }

    let numbers = [];
    // * convert numbers into strings 
    for( let i = 0; i < nums.length; i++ ) {
        numbers.push(nums[i].toString());
    }

    numbers.sort(function (x, y) {
        //* condition ? exprIfTrue : exprIfFalse
        return x + y > y + x ? -1 : 1;
    });

    let ans = '';

    for( i = 0; i < numbers.length; i++ ){
        ans += numbers[i];
    }

    return ans[0] == '0' ? '0' : ans;
    //return numbers;
};
console.log(largestNumber([10,2]))
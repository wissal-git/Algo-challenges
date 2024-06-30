// Javascript implementation of above approach
     
    // Function that returns the minimum
    // number of operations to be performed
    // to reduce the number to 1
    function count_minimum_operations(n)
    {
 
        // Base cases
        if (n == 2) {
            return 1;
        }
        else if (n == 1) {
            return 0;
        }
        if (n % 3 == 0) {
            return 1 + count_minimum_operations(n / 3);
        }
        else if (n % 3 == 1) {
            return 1 + count_minimum_operations(n - 1);
        }
        else {
            return 1 + count_minimum_operations(n + 1);
        }
    }
     
    let n = 10;
    let ans = count_minimum_operations(n);
    console.log(ans);
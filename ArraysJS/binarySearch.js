function binarysearch(arr, n, k) {
    // code here
   // let txtval ;
    let found = false ;
    for (let i= 0; !found && i <= n;i++)
    {
        if (arr[i] == k)
        {   found=true
            console.log(" k appears at index "+ i);        }    
    }
    if (found) {
        return 1;
    }
    else{
        return -1 ;
    }
}
let arr = [1,2,3,7,5];
let n = arr.length;
let k = 5;
console.log(binarysearch(arr, n, k));
/**
 * ! can't remove undefined 
 * * if i use else within for loop keeps on showing
 */
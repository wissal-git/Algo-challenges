
    //Function to find a continuous sub-array which adds up to a given number.
function   subarraySum(arr, n, s)
    {
        //your code here
         let sum=arr[0];
        let i=0,j=1;
        while(j<=n)
        {
            if(sum==s)
                if(i!=j)
                    return [i+1,j];
            if(sum>s)
                sum-=arr[i++];
            else
                sum+=arr[j++];
        }

        return [-1];
    }

arr =  [1,2,3,7,5]
n=arr.length;
s=10;
console.log(subarraySum(arr,n,s));
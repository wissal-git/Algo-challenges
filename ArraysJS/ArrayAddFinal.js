function arrayAdditionI (arr)
{  
   let largestNumber;
   let NewArray =[];
   for (i=0;i<=arr.length;i++)
   {
    if(arr[i]<arr[i+1]) {
        largestNumber=arr[i+1] ;
       // NewArray.push(arr[i])
    }
   } 
   NewArray = arr.filter(number => number !== largestNumber)
   console.log(largestNumber);
   console.log(NewArray);
   //--------------------------------------------
   let currNum = 0;
   for(let j = 0; j < NewArray.length; j++)
   {
    
    if(currNum < largestNumber)
    {    currNum=  NewArray[j] + NewArray[j+1];
        return currNum;
    }
    if ( currNum > largestNumber)
    {
        currNum = currNum - NewArray[j] ;
    }
   }
   console.log( currNum);
}
arr=  [5,7,6,3,2]
arrayAdditionI(arr)
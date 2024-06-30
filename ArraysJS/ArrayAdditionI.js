function arrayAdditionI (arr)
{  
   let largestNumber;
   let NewArray =[];
   //find all posible combination 
   let pairs= [];
   let numList =[];
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
    for(let j = 0; j < NewArray.length; j++)
   {
    let currNum = NewArray[j];
    let diff =largestNumber-currNum;
    if(numList.includes(diff))
    {
        pairs.push([currNum,diff]);
    }
    numList.push(currNum)
   }
   console.log( pairs);

   if (pairs != null)
   {
    console.log( true) ;
   }
   else {
    //return false;
    console.log( false) ;

   }
}

/***
 *
 * * just wanna scream so louuuud !!  i'm dying my soul is suffering i can't do this anymore 
 * * just i'm shatting down everything 
 */
arr=  [12,5,6,3,2]
arrayAdditionI(arr)
function findSumArr(arr)

{   let NewArray= arr.sort();
    let largestNumber= 4;
    let currNum = 0;
    let f1=0;
    for(let j = 0; j < NewArray.length; j++)
    {
     
        if(currNum < largestNumber)
        {   f1=  currNum + NewArray[j];
        }
        if ( f1 > largestNumber)
        {
          if(NewArray <0)
          {
            currNum = currNum + NewArray[j] ;
          }
        else if(NewArray > 0){
            currNum = currNum - NewArray[j] ;

        }
         //return currNum;
        }
    }
    console.log( currNum);
}
arr =  [5,7,6,1,2]
console.log(findSumArr(arr));
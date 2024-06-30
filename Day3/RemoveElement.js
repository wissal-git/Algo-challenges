function  RemoveElement(arr,num)
{
    for(i=0;i <arr.length;i++)
    {
        if (arr[i] == num) {
            //arr.pop(arr[i]);
            // !The splice() method returns an array by changing (adding/removing) 
            // !its elements in place.
            arr.splice(i, 1);
        }
    }
    return arr ;
}
console.log(RemoveElement([0,1,2,3],2))
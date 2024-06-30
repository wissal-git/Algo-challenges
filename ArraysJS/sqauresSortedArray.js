function Squares(arr)
{   //arr.sort();
    let arrOfSquares =[];
    for (i=0;i<arr.length;i++)
    {
      arrOfSquares.push(arr[i]**2 );
    } 
    return arrOfSquares.sort(function (a, b) { return a - b });
}
console.log(Squares([-4,-1,0,3,10]));
//console.log(([0,1,16,100,9]).sort())

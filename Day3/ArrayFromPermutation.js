function buildArray(arr)
{    //crvar foo = [];
   //  let arr =[];
     let res= [];
    /*for (var i = 0; i <= N-1; i++) {
       arr.push(i);
    }*/
    //let result =[];
    for(i=0;i<arr.length;i++)
    {
       res[i]=arr[arr[i]];
    }
    return res ;
}
console.log(buildArray([0,1,3,4,5,2]));
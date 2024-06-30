function test (arr)
{   let dif= arr[1]-arr[0];
    //let div=arr[1]/arr[0];
  for (i=0;i<=arr.length;i++)
  {
    if(arr[i]+dif ==arr[i+1]) return console.log('true');
    else{return false;}
  }
}
console.log(test([5,11]))
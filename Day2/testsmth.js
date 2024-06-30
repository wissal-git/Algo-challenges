/*arr=[1,2,3]
console.log(arr[-1] == arr[1]); //undefined 
for(i=0;i<=arr.length;i++)
{   //console.log(arr[i]);
    //console.log('-----------------')
   console.log(arr[i-1]);
}*/
function unique(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    // 👉 Option 1
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
      }
    }  return result;
  }
  // 🎉  [ 1, 2, 3 ]
  console.log(unique([1, 1, 3, 2, 2,4,7,7,8]));
/*var mergeOrderArr = function (arr1,arr2){
    var result = [],
     i = 0,  
     j = 0;
  
    while( i < arr1.length  && j < arr2.length ){
      
      if(arr1[i] <= arr2[j]){
        result.push(arr1[i]);
      } else{  
        result.push(arr2[j]);
      }
    } 
  return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}
var b = mergeOrderArr([1,100], [3,4,6,8]);
console.log(b);*/
// O(n) time & O(n) space
function merge(arr1,arr2)
{
  let merged =[];
  let index1 =0; // * i for array 1
  let index2 =0; // * j for array 2
  let current = 0; // * k for array merged
  while     (current < (arr1.length + arr2.length))
  {
    let unmerged1 =arr1[index1];
    let unmerged2 =arr2[index2];
    // if next comes from arr1
    if ((unmerged1 != unmerged2) ){
    
    //&& ! (merged.includes(unmerged1))) {
      //merged[current] = unmerged1;
      merged.push(unmerged1);
      index1++;

    // if next comes from arr2
    } 
    /*else {
      merged[current] = unmerged2;
      index2++;
    }*/
  current++;
  }
  return merged;
}
arr1=[1,-1,3,8];
arr2=[1,5,6,7];
console.log(merge(arr1,arr2));

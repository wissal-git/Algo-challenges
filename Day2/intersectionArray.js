function intersArray(arr1,arr2)
{
    let intersectionArr =[];
    for (var i = 0; i < arr1.length; i++) {
        if((arr2.includes(arr1[i])))
        {
          intersectionArr.push(arr1[i]);
        }
     }
     return intersectionArr.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })

}


console.log(intersArray([1,2,2,1],[2,2]));
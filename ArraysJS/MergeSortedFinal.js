/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
/*function merge (arr1,arr2)
{
    let merged =[];
    let current= 0;
   // let i =0 ;
    while (current < (arr1.length) && current <(arr2.length))
    {   
        if(arr1[current] != arr2[current])
        {
            merged.push(arr1[current],arr2[current])
            current++;
            console.log(merged)
        }
        
        for (i=current+1;i<arr1.length;i++)
        {
            if(! (merged.includes(arr1[i])))
            {
                merged.push(arr1[i]);
            }
        }
        
    }
    return merged ;

}*/
//console.log(merge([1,2,5,4],[4,8]));

//******************* solution from the internet like mine ******************** */

const merge =(arr1,arr2) =>{
    let result =[];
    let i =0;
    let j=0;
    // * iterate through both and compare then store least
    while(i<arr1.length && j<arr2.length)
    {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    //
    while(i<arr1.length)
    {
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length)
    {
        result.push(arr2[j]);
        j++;
    }
    //return result;
    //* remove duplicates from sorted array
    // ! need to understand how it works filter ()
    return result.filter((item, 
       index) => result.indexOf(item) === index);
}
console.log(merge([1,2,5,4],[4,8]));
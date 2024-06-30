
function findCommChar(arr)
{   let count = 0; 
    for (i=0;i< arr.length ;i++)
    {
        for (j=0;j< arr[i].length ;j++){
            if (arr[i] == arr[i][j])
            {
                count +=1;

            }
        }

    }
}
console.log(findCommChar(['wissal','apple','wi']))

/**
 * 
 * @param {*} string1 
 * @param {*} string2 
 * @returns 
 */

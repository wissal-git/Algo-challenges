function firstReverse(str)
{   let newStr ='';
    for (i=str.length-1;i >= 0;i--)
    {
        newStr=newStr + str[i];
    }
    return newStr;
}
console.log(firstReverse('wissal kahloul'));
function ThirdGreatest(strArr)
{   let NewArr=[];
    //let n=0;
   /* for(let i=0;i<=strArr.length;i++)
    {   NewArr= console.log( strArr[i]?.sort());
       // NewArr = NewArr.push(n);
        console.log(NewArr);
    } */
    NewArr =strArr.sort();
    console.log(NewArr);
    //return NewArr[3];
   
   
}
ThirdGreatest(['abc','defg','hijk']);
// ThirdGreatest(["hello", "world", "after", "all"]);

/**
 * * important
 * https://bobbyhadz.com/blog/javascript-cannot-read-property-length-of-undefined#:~:text=The%20%22TypeError%3A%20Cannot%20read%20properties%20of%20undefined%20%28reading,types%20that%20support%20it%20-%20arrays%20and%20strings.
 * 
 */
//sort array by string length 
function sortByLength(array){
    let New=[];
    New= array.sort((a,b) => a.length-b.length).reverse();
    console.log(New[2]);
}
console.log(sortByLength( ["coder","byte","code"]
))

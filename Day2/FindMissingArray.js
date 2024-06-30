/*
function missing(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = x + 1;
        if (arr[i] != x) {
            return(x);
        }
        //console.log(x);
    }
}
*/
//console.log(missing([1, 2, 3, 4, 5, 6, 7, 10]));
// * yey !! wissal solution works i rock :)
function findMissing(n,secArr)
{
    //const N = 5;
    let missingArr=[];
    const arr = Array.from(Array(n), (_, index) => index + 1);
     console.log(arr);
    for (var i = 0; i < arr.length; i++) {
       if(!(secArr.includes(arr[i])))
       {
         missingArr.push(arr[i]);
       }
    }
    return missingArr;
 
/*
    Output: [ 1, 2, 3, 4, 5 ]
*/
}
console.log(findMissing(10,[4,3,2,7,8,2,3,1]));
/** ? just thoughts
      * * i just master coverring up like i'm ok i laugh hard and smile and be funny
      * * how can i hide all that destruction mind blowing and i hate it so bad 
      * * being alone is not fun and acting is not fine 
      * * i fake everything i feel fake and it's the worst feeling like u r not accepting what u are going threw 
      * * so it's like covering an ugly birthday gift u just won't open it it's better on the outside
      * * and on the inside a complete disaster :)!
      */
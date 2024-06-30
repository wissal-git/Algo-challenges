/*
function ArithGeo (arr)
{   let dif= arr[1]-arr[0];
    let div=arr[1]/arr[0];
   // let output="";
    for (let i =0;i<=arr.length;i++)
    {
        if(arr[i]+dif ==arr[i+1])
        {
           return  console.log("Arithmetic");
           
        }
        else if (arr[i]*div==arr[i+1])
        {
           return console.log("Geometric");
        }
        else
        {
            return -1;
        }
    }
}
console.log(ArithGeo([2,6]))*/
function test(arr){
    for(i=0;i<= arr.length;i++)
    {
        if (arr[i]==3)
        {
            //return true;
            console.log("index is at" + si) ;
        }
        // else{
        //     return -1;
        // }
    }
}
arr=[1,2,3,5,3]
console.log(test(arr))

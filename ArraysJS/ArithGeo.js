
function ArithGeo (arr)
{   let dif= arr[1]-arr[0];
    let div=arr[1]/arr[0];
   // let output="";
    for (let i =0;i<=arr.length;i++)
    {
        if(arr[i]+dif ==arr[i+1])
        {
           return  console.log("Arithmetic");
           break;
           
        }
        else if (arr[i]*div==arr[i+1])
        {
           return console.log("Geometric");
           
        }
        else
        {
            //output= -1 ;
            //return output;
            return -1;
        }
    }
   
}

console.log(ArithGeo([3,45,87]))

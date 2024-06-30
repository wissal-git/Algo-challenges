//array=[1,2,3,4,5]

//console.log(Math.floor((array.length)/2));

function findMountain(array)
{
    mid=Math.floor((array.length)/2);
    //for()


}
function  validMountainArray (A) 
{
const len = A.length;
let peak;

if (len < 3){
    return false;
}

for(let i = 0; i < len; i++){
    if(A[i] === A[i+1]){
        return false
    }
    
    if(peak && A[i] >= peak){
        return false;
    }
    
    if(peak && A[i] <= A[i+1]){
        return false;
    }
    
    if(!peak && A[i] > A[i+1]){
        peak = A[i];
    }
}

return peak !== undefined && peak !== A[0];
};
//function([1,2,3,5,2,1,0])
//console.log (validMountainArray([1,2,3,5,2,1,0]))

/**
 * * arr.length >= 3
 * * There exists some i with 0 < i < arr.length - 1 such that:
 * * arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 * * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * * 
 * ? some explanation 
 * ? First check if the length of the array is greater than 3
 * ?Then find the max element in the array and check whether it is not the first or last element in the array.
 * ? Since if it is the first or the last element, we cannot get an increasing followed by decreasing order of elements.
Check whether all the elements before the max element are in increasing order.
Check whether all the elements after the max element are in decreasing order.
If all these conditions are satisfied only then our array is a valid mountain array.
 */

function validmounArr(arr){

    if(arr.length<3) {
        return false;
    } else {
        let maxElementIndex = 0;
        for(let i=1;i<arr.length;i++) {
            if(arr[i]>=arr[maxElementIndex]) {
                maxElementIndex = i;
            }
        }
        
        if(maxElementIndex === arr.length-1 || maxElementIndex === 0) {
            return false;
        }

        let isMountainArray = true;

        for(let j=0;j<maxElementIndex;j++) {
            console.log("In j loop", arr[j], arr[j+1]);
            if(arr[j]>=arr[j+1]) {
                isMountainArray = false;
            }
        }

        for(let k=maxElementIndex;k<arr.length-1;k++) {
            console.log("In k loop", arr[k], arr[k+1]);
            if(arr[k]<=arr[k+1]) {
                isMountainArray = false;
            }
        }

        return isMountainArray;
    }
}
console.log(validmounArr([1,2,3,9]))
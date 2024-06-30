const arr = [5, 0, 1, 0, -3, 0, 4, 6];
const moveAllZero = (arr = []) => {
   const res = [];
   let currIndex = 0;
   for(let i = 0; i < arr.length; i++){
      const el = arr[i];
      if(el === 0){
         res.push(0);
      }else{
         res.splice(currIndex,undefined, el);
         currIndex++;
      }
   }
   return res.join(' ');
};
console.log(moveAllZero(arr));
/**
 * * i understand this one finally  :) !
 */
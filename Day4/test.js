function commonChar(arr){
    let duplicateCharacter = '';
    for (let i = 0; i < arr.length; i += 1){
        for(let j = 0; j < arr[i].length; j += 1)
         {
            if (duplicateCharacter.indexOf(arr[i][j]) === -1) {
                if ((arr[i][j]).indexOf(arr[i][j]) !== -1) {
                  duplicateCharacter += arr[j];
                }/*from  w ww  .  java 2  s.  c o  m*/
        
              }
    }
    }
}
//console.log (commonChar("bella","label","roller"))

const commonChars = (A) => {
    const commonArr = [];
    const firstWordArr = A[0].split('');

    firstWordArr.forEach((char) => {
        if (A.every((word) => word.includes(char))) {
            commonArr.push(char);
            A = A.map((word) => word.replace(char, ''));
        }
    });

    return commonArr;
    console.log(commonArr)
};
console.log(commonChars(["bella","label","roller"]))
/**
   * * split : 
   * str.split(separator, limit)
   */
//* classic solution 

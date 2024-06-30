function QuestionsMarks(str) { 

    // code goes here  
      numberIndices = []
  
      for (var i = 0; i < str.length; i++) {
          var el = str[i];
          if ((/[0-9]/).test(el)) {
              numberIndices.push(i)
          }
      }
  
      subarrays = [];
      for (var j = 0; j < numberIndices.length-1; j++) {
        var num1 = parseInt(str[numberIndices[j]])
        var num2 = parseInt(str[numberIndices[j+1]])
        if (num1 + num2 === 10) {
          var subarray = str.slice(numberIndices[j], numberIndices[j+1])
          subarrays.push(subarray)
        }
      }
      console.log(subarrays)
      if (subarrays.length === 0) {
        return false 
      } else {
        return subarrays.every( function(string) {
          return string.split('?').length - 1 === 3
        })
      }
           
  }
     
  // keep this function call here 
  QuestionsMarks(readline());
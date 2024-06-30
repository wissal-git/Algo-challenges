/*function PalindromeTwo(string) {

    let punctuationRegex = /\w+|\s+|[^\s\w]+/g;
    let array = string.match(punctuationRegex);
    let originalStringWithoutPunctuation = new String("");
    let reversedString = new String("");
    for(let i=0; i<array.length; i++) if(array[i].match(/^[a-zA-Z]+$/)) originalStringWithoutPunctuation += array[i];
    for (let i=originalStringWithoutPunctuation.length-1; i>=0; i--) reversedString += originalStringWithoutPunctuation[i];
    if(originalStringWithoutPunctuation.toLowerCase() === reversedString.toLowerCase()) return true;
    else return false;  
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(PalindromeTwo("Noel sees leon"));*/

/*function palindrome(str) {

    var checkSpecial = str.replace(/[^A-Za-z0-9]/g, '');
    var checkPalindrome = str.split('').reverse().join('');
    return checkSpecial == checkPalindrome;
  }
  console.log(palindrome("eye")); // false*/

  function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   //
  console.log( palindrome("A man, a plan, a canal. Panama"));

  //* this shitty code cost me my dream job WTF !!
  // ! aaaahhhh oh god i just wasn't ready 
  //  ? where in the hell i'll find a job as good i really liked them
  // * it was just a dream too far away 
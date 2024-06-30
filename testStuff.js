

const prompt=require("prompt-sync")({sigint:true}); 
//const phrase = prompt('enter phrase : ')
// take input
//console.log("hi wissal !!")

function palindrome (str)
{   
    var checkSpecial = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    for (i=0;i<=checkSpecial.length;i++)
    {
      if(checkSpecial[i] !== checkSpecial[checkSpecial.length-1-i])
      {
        return false;
      }
      else
      {
        return true;
      }
    }
} 

const phrase = prompt('enter phrase :');

// call the functionhi there
const value = palindrome(phrase);

console.log(value);
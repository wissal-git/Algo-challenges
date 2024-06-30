
//* letter change 
function LetterChanges(str) { 
    str = str.replace(/[a-zA-Z]/g, function(ch) {
    if (ch === 'z') return 'a';
    else if (ch === 'Z') return 'A';
    //*The String.fromCharCode() static method returns a string created from 
    //*the specified sequence of UTF-16 code units.
    else return String.fromCharCode(ch.charCodeAt(0) + 1);
    });
    return str.replace(/[aeiou]/g, function(ch) {
    return ch.toUpperCase();
    });
   }
    console.log(LetterChanges('wissal kahloul'))
   // keep this function call here 
   // to see how to enter arguments in JavaScript scroll down
   //LetterChanges(readline());
   
   
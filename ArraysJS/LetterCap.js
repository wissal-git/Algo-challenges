function LetterCapitalize(str) { 
    var output = ""+str.charAt(0).toUpperCase();
    for(var i=1; i < str.length; i++){
        if(str.charAt(i - 1) == " ") {
            output += str.charAt(i).toUpperCase();
        } else {
            output += str.charAt(i);
        }
    }
   return output;
}
console.log(LetterCapitalize("hello world"))
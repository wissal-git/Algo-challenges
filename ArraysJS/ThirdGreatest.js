function ThirdGreatest(strArr) { 
    strArr.sort(function(a, b) {return b.length - a.length});
    return strArr[2]; 
   }
    
   // keep this function call here 
   // to see how to enter arguments in JavaScript scroll down
   console.log(ThirdGreatest(["coder","byte","code"]));
   console.log(ThirdGreatest(["abc","defg","z","hijk"]));

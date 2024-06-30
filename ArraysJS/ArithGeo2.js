function ArithGeo(arr) { 
    var dif=arr[1]-arr[0], div=arr[1]/arr[0],result='';
    function arithCheck(arr){
     for (var i=1;i<arr.length;i++){
        if (arr[i]!=arr[i-1]+dif) return -1;
     }
      return true;
    }
    function geoCheck (arr){
      for (var i=1;i<arr.length;i++){
        if (arr[i]!=arr[i-1]*div) return -1;
    }
      return true;
    }
      result=arithCheck(arr);
      if (result!=-1) return 'Arithmetic';
      else {result=geoCheck(arr)
      if (result!=-1) return 'Geometric';
           else return -1}
    }

    console.log(ArithGeo([5,1,15]))
function FindIntersection(strArr) { 
    const  inters =[ ];
    const [firstList,secondList] = strArr.map(s => s.split(", "));
    for (let i=0;i < firstList.length; i++)
    {
      for (let j=0;j<secondList.length;j++)
      {
        if(firstList[i] === secondList[j]){
        //return true 
       // return inters.push(firstList[j])  
        inters.push(firstList[i]);
        
        }
      }
    }
    return  inters.join(',');
    //return inters; 
  }
  // keep this function call here 
  console.log(FindIntersection(readline()));
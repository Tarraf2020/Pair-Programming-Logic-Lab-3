function perfectNb(number) {
    
    var temp = 0;
    for(var i=1;i<=number/2;i++)
      {
          if(number%i === 0)
           {
             temp += i;
           }
      }
    
      if(temp === number && temp !== 0)
         {
        console.log(number +" is a perfect number.");
        return true;
         } 
      else
         {
        console.log(number +" is not a perfect number.");
        return false;
         }   
  } 
    
    perfectNb(28);
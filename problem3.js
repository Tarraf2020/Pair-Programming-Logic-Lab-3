const addOdd = (x, y) =>{
    var a=0;
    for(var i =x; i<=y; i++){
        if(i%2 !== 0){            
             a=a+i;
        }
    }console.log(a);
}
addOdd(1,5);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  

  function compareNb(nb1,nb2){
    return nb1==nb2 ;
}



const magic = () => {
  var nb = getRndInteger(1, 30);
  var r =6;
  for(var i=0;i<5;i++){
          r--;
       const y = prompt("Tell me your guess.\nYou have "+ r +" trie/s.");
        if(compareNb(y, nb)){
          alert("true");
          break;
          }
        else {
          
          alert('Wrong ');
        }  
}
}
magic();

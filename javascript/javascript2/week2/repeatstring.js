function threeFiveCall(start,end,give3,give5){
    let myArray = []
    for(let i=start;i<=end;i++){
  
      if(i%3==0 && i%5==0){
        myArray.push(i);
        Both3And5(i);
      }
      else if(i%5==0){
        say5(i);
        myArray.push(i);
  
      }
      else if(i%3==0){
        say3(i);
      myArray.push(i);
      }
  }
  
  console.log(myArray);
  }
  threeFiveCall(0,20,say3,say5);
  function Both3And5(i){
    console.log("This number: " +i+ " is divisible by 3 and 5 ");
  }
  function say3(i){
    console.log("This number: " +i+ " is divisible by 3");
  }
  function say5(i){
    console.log("This number: " +i+ " is divisible by 5 ");
  }
  
  // 3- solving the problem using forloop...
  
  function repeatString(str, num) {
    for(let i=0;i<num;i++){
      console.log(str);
    }
  }
  repeatString("Here is",5)
  
  // 4- solving the problem using while loops
  function repeatString(str, num) {
  
    while (num > 0) {
      console.log(str);
      num--;
    }
  }
  repeatString("Here is",5);
  
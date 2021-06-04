
//switch statements
function pressed(){
  var text = document.getElementById("inp").value;

  switch(text){
    case "red":
      document.getElementById("header").style.color = "red";
      break;
    case "blue":
      document.getElementById("header").style.color = "blue";
      break;
    case "green":
      document.getElementById("header").style.color = "green";
      break;
    default:
      document.getElementById("header").style.color = "black";
      break;
  }
  //If vs switch
  // if (text === "red"){
  //   document.getElementById("header").style.color = "red"
  // } else if (text === "green"){
  //   document.getElementById("header").style.color = "green"
  // }  else if (text === "blue"){
  //   document.getElementById("header").style.color = "blue"
  // } else{
  //   document.getElementById("header").style.color = "black"
  // }
  
  //Use switch statements when testing exact values
  //If statement when testing for multiple values
  //switch == 3.3
  //if  < 9000
}


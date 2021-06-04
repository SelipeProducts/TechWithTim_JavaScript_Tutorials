//If and Else Statement
var condition = true
if (condition){
  console.log("Condition in if statement is true")
} else{
  console.log("Condition has to be false if this runs")
}

//Else If Statements
function pressed(){
  var text = document.getElementById("inp").value;
  if (text === "red"){
    document.getElementById("header").style.color = "red"
  } else if (text === "green"){
    document.getElementById("header").style.color = "green"
  }  else if (text === "blue"){
    document.getElementById("header").style.color = "blue"
  } else{
    document.getElementById("header").style.color = "black"
  }
}



//--------------------------------------------------
//Multiple If Statements vs If w/multiple Else Ifs

//Just having If statements. Each If statement will run. Sometimes if value found, other if statement checks are not needed. 

//With Else if's can save time and resources by stopping if chain
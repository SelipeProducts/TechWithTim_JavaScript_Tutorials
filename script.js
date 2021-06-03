//Function initilization
function add(){
  console.log("add")
}

//Function call
add();

//Can call func multiple times
add();
add();
add();

//a nd b are parameters
function addV2(a, b){
  return a + b;
}

//both 5's are arguments
var x = addV2(5,5);
console.log(x);

console.log(addV2(-100, 75));

//----------------------------------------------------

function addV3(a, b){
  console.log(a + b);
}

addV3(2, 2);

//-----------------------------------------------------

function red(){
  console.log("red");
}

function green(){
  console.log("green");
}

function red2(){
  document.getElementById("btnTitle").innerHTML = "Red";
}

function green2(){
  document.getElementById("btnTitle").innerHTML = "Green";
}

function style_color(){
  document.getElementById("btnTitle").style.color = "green";
}
//Loops
//Same thing running multiple times

var i = 0;
while(i < 10){
  console.log(i);
  i++;
}


//using break to exit loop
while(true){
  console.log(i);
  i++;
  if(i == 15){
    break;
  }
}


//using variable's number value to select index in an array
var arr = ["tim", "joe", "bill"];

var i = 0;
while(i <arr.length){
  console.log(arr[i]);
  i++;
}


//Filling an array
var arr_fill = [];
i = 0;

while(i <= 100){
  arr_fill.push(i);
  i++;
}
console.log(arr_fill);

//--------------------------------------------

//Do While
//usefull if your not sure if loop will run

//dont care about condition for first loop but condition is tested for every loop after

var cond = false;

do{
  console.log("run!");
} while (cond);
// // //Different ways to write 
// // //1)console
// // //2)document
// // console.log("Hello! Is there anybody in there!")

// // document.write("<h1> Hello!? </h1>")

// // //--------------------------------------------------
// // //Alternative Console Writing
// // console.log("Hi this is just another log.")
// // console.warn("Warning! Warning! New Warning Unlocked!")
// // console.error("Error Error. Does not compute")

// console.log(document.getElementById("header"))

// console.log(document.getElementById("header").innerHTML)

// //Setting Value to Document's ID Element 
// document.getElementById("header").innerHTML = "This is NOW THE NEW HEADER!"

// console.log(document.getElementById("header").innerHTML)

//-----------------------------------------------------
// //Writing Value to Document
// document.write(document.getElementById("header").innerHTML)
// document.write(" <==That was not a header")
// document.write("<h3> But this is a header</h3>")

// //-----------------------------------------------------
// //Trying to Log Input Value inside text box
// //This line of code does not work by itself
// //Bc HTML and JS read from top to bottom
// //When page is ran value is logged but it is blank
// console.log(document.getElementById("myInput").value)

//-----------------------------------------------------
//Primitive Data Types

//String
//'' "isdfjOOJ"

//Boolean
//True False

//Number
//integer 
//0 100 1000

//float/double
//0.1 1.3 29.0

//Undefined
  //-value has not be set
  //-havnt defined anything
//null
  //-havnt stored anything yet

//---------------------------------------------------
//Variables

var x = 3;

console.log(x)

//variable names should represent var characteristics

var name = "Cesar"

console.log(name)

//Rules for var names
//start with letter
//no spacing 
//can use numbers, digits, underscore_
//cant use some special characters
//Use camelcase or underscore

//--------------------------------------------------
//Var Reference Locations
var name2 = "Tim"
var name3 = "Tech"

name3 = name
name3 = name2


console.log("Name3: "+name3)
console.log("Name: "+name)
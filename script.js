// //Different ways to write 
// //1)console
// //2)document
// console.log("Hello! Is there anybody in there!")

// document.write("<h1> Hello!? </h1>")

// //--------------------------------------------------
// //Alternative Console Writing
// console.log("Hi this is just another log.")
// console.warn("Warning! Warning! New Warning Unlocked!")
// console.error("Error Error. Does not compute")

console.log(document.getElementById("header"))

console.log(document.getElementById("header").innerHTML)

//Setting Value to Document's ID Element 
document.getElementById("header").innerHTML = "This is NOW THE NEW HEADER!"

console.log(document.getElementById("header").innerHTML)

//-----------------------------------------------------
//Writing Value to Document
document.write(document.getElementById("header").innerHTML)
document.write(" <==That was not a header")
document.write("<h3> But this is a header</h3>")

//-----------------------------------------------------
//Trying to Log Input Value inside text box
//This line of code does not work by itself
//Bc HTML and JS read from top to bottom
//When page is ran value is logged but it is blank
console.log(document.getElementById("myInput").value)

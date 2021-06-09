//Arrays
var cesar = ["hello", 5, 4.5, "Cesar"];
console.log(cesar);
//Creats empty array with 50 elements
var arr = new Array(50);

//Selecting Indexes
console.log("Index 0: " + cesar[0]);
console.log("Index 1: " , cesar[1]);

//Calling index outside of len returns undefined
console.log("Out of Index: " , cesar[5]);

//Inserting into/Changing filled array
cesar[2] = "new elem";
console.log(cesar);

//Array Length
console.log("Length: ", cesar.length);

//Returns removed element
//removed elem is last item in array
console.log(cesar.pop());
console.log(cesar);

//Inserts element to end of array
cesar.push("Pushed In");
console.log(cesar);

cesar.shift();
console.log(cesar);


cesar.unshift("AndBanan", "Zebra");
console.log(cesar);

//look how 10 is eventually sorted
cesar.push(1)
cesar.push(3)
cesar.push(10)
//look how caps sorted before lower
cesar.push("A")
cesar.push("Z")
cesar.push("a")
cesar.push("c")
//sorts numbers then strings
cesar.sort();
console.log(cesar);
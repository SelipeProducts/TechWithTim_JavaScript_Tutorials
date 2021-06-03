//Comparison Operators

var x = 7;
var y = 8;

//var x = 8;

var b = x < y;
var c = x >= y;

console.log(b);
console.log(c);

//--------------------------------------------------
//Equivalence Operator ==
var d = x == y;
console.log(d);

//=== is equal to value AND is equal to type

var x2 = 11;
var y2 = "11";

var e = x2===y2; //should be false bc diff types
var f = x2+y2;  //converts to string
var g = x2 != y2; //false
var h = x2 !== y2; //true bc type not same

console.log(g);
console.log(h);

//----------------------------------------------------
//Chaining Operators  w/ Boolean Operators

//AND Statement &&
//OR Statement ||
//NOT Statement !


var name = "Cesar";
var name2 = "cesar";
var x3 = 10;
var y3 = 9;

console.log(name == name2 && y3>x3);
console.log(name == name2 || y3>x3);


console.log(!true);
console.log(!(x<y));

console.log(!(x < y) || !(name == name2 && 9 > 0));
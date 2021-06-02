// Arithmetic Operator
var x = 10;
var y = 3;
var z1 = x+y;  //addition
var z2 = x-y;  //subtraction
var z3 = x*y;  //multiplication
var z4 = x/y;  //division
var z5 = x%y;  //modulus (remainder)

//z variables get values from other values. Z vars do not change x or y vars.
console.log(z1);
console.log(z2);
console.log(z3);
console.log(z4);
console.log(z5);

//--------------------------------------------
//Assignment Operators

x += 5;    // x = x+5
x -= 5;
x *= 5;
x /= 5;
x %= 5;

y++;   // y = y+1
y--;

//---------------------------------------------------
//String Concatenation /with Numbers
var str = "hello";

var str2 = "world";

var str_concat_num = str+x;
var str_concat_str = str+str2;

//---------------------------------------------------
//Order of Operations

var result = 4 * 5 / 3 + 9 - 2;
var result2 = 4 * (5 / (3 + 9 - 2));
console.log("Result: "+result);
console.log("Result2: "+result2);


/* 
JS 

B brackets
E exponents
D division
M multiplication
A addition
S subtraction

------------------vs----------------------------
MATH's PEMDAS
*/

//-------------------------------------------------
//Can also use Assignment Operators on strings

str+=str2
str-=str2
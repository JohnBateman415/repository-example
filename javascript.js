console.log("Executing javascript.js");

var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday", "Superday"];

var arrayLength = days.length;
var loopCounter = 0;  
console.log("Array length is "+arrayLength);

while (loopCounter < arrayLength) {
    console.log("Array Element "+ loopCounter + " is "+ days[loopCounter] );
    loopCounter++;
}
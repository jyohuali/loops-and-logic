var myNum = 7;

//if statements test to see if the expression nested within the () evaluates to the true, if it does it performs  the code nested withing the following {}
if(myNum > 5) {
  console.log(myNum + "is greater than 5 ");

}
if (myNum === 5) {
  console.log("myNum is corruntly set to 5");
} else {
  console.log ("myNum is currently not 5");
}


// else if statements can be added onto if statements additional logic test if the previous if or else
if (myNum > 0) {
  console.log("myNum is greater than 0");
} else if (myNum < 0) {
  console.log("myNum is less that 0")
} else{
  console.log("myNum is either 0 or is not a number");
}

if(1) {
  console.log("1 is truthy");
}

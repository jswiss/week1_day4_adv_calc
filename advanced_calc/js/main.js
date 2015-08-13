//write an event listener on the button to test
// don't touch HTML/CSS
//only touch DOM & JS
//when click calc button on basic-answer, want to change hide to show
//focus on getting the basic calc working, test the button with console.log(), then work on getting the answer to the place
//write eventListener on button, test inputs from each button, and manipulate accordingly
//basic, BMI, Mortgage, trip --> in order
//are we setting calcs?
//take <script></script> out of head and put below body

var basicCalc = document.getElementById("basic-calc");


//this should store the value
basicCalc.addEventListener("click", function(){
  var basicNum1 = parseFloat(document.getElementById("basic-num-1").value);
  var basicNum2 = parseFloat(document.getElementById("basic-num-2").value);
  console.log(basicNum1);
  console.log(basicNum2);
  var basicOp = document.getElementById("basic-operation").value;
  console.log(basicOp);
    if (basicOp === "+") {
      console.log(basicNum1 + basicNum2);
    } else if (basicOp === "-") {
      console.log(basicNum1 - basicNum2);
    } else if (basicOp === "*") {
      console.log(basicNum1 * basicNum2); 
    } else if (basicOp === "/") {
      console.log(basicNum1 / basicNum2);
    };     
});
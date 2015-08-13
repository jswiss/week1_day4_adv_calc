var basicCalc = document.getElementById("basic-calc");



basicCalc.addEventListener("click", function(){
  
  //defines variables and sets them equal to numbers
  var basicNum1 = parseFloat(document.getElementById("basic-num-1").value);
  var basicNum2 = parseFloat(document.getElementById("basic-num-2").value);
  
  console.log(basicNum1);
  console.log(basicNum2);
  var basicOp = document.getElementById("basic-operation").value;
  console.log(basicOp);

  //If statement to work the operator
    if (basicOp === "+") {
      var ans1 = basicNum1 + basicNum2;
    } else if (basicOp === "-") {
      var ans1 = basicNum1 - basicNum2;
    } else if (basicOp === "*") {
      var ans1 = basicNum1 * basicNum2; 
    } else if (basicOp === "/") {
      var ans1 = basicNum1 / basicNum2;
    }; 

    console.log(ans1);

  //changes class name of answer box to "show"
  document.getElementById("basic-answer").className = "show";

  //changes innerHTML to Basic Calculator's answer
  document.getElementById("basic-answer-alert").innerHTML = ans1;  
});


//BMI Calculator
var bmiUnits = document.getElementById("bmi-units");

bmiUnits.addEventListener("change", function() {

  bmiUnitsCorrect = document.getElementById("bmi-units").value;

  if (bmiUnitsCorrect === "imperial") {
     document.getElementById("bmi-mass-unit").innerHTML = "lb";
     document.getElementById("bmi-height-unit").innerHTML = "in"; 
  } else {
     document.getElementById("bmi-mass-unit").innerHTML = "kg";
     document.getElementById("bmi-height-unit").innerHTML = "m"; 
  }
  });

var bmiCalc = document.getElementById("bmi-calc");

bmiCalc.addEventListener("click", function(){
  
  //defines variables and sets them equal to numbers
  var mass = parseFloat(document.getElementById("bmi-mass").value);
  var height = parseFloat(document.getElementById("bmi-height").value);

  console.log(bmiUnitsCorrect);
  console.log(mass);
  console.log(height);

  //If statement to work the set calculation
  if (bmiUnitsCorrect === "imperial") {
    var ans2 = (mass * 703 )/ Math.pow(height, 2); 
  } else {
    var ans2 = mass / Math.pow(height, 2);
  } 

  console.log(ans2);

  //changes class name of answer box to "show"
  document.getElementById("bmi-answer").className = "show";

  //changes innerHTML to BMI Calculator's answer
  document.getElementById("bmi-answer-alert").innerHTML = ans2;  
});
var basicCalc = document.getElementById("basic-calc");


//this should store the value
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

  document.getElementById("basic-answer-alert").innerHTML = ans1;  
});
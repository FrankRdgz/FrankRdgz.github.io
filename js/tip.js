var inputA = document.getElementById("input-a");
var inputB = document.getElementById("input-b");
var inputC = document.getElementById("input-c");
var inputD = document.getElementById("input-d");
var inputE = document.getElementById("input-e");
var inputF = document.getElementById("input-f");

var calculateButton = document.getElementById("calculate-button");
var output = document.getElementById("output_tip");
var output2 = document.getElementById("output2");

calculateButton.addEventListener("click", function() {
  var a = inputA.value;
  var b = inputB.value;
  var c = inputC.value;
  var tip = (a * b) / 100;
  var result = Number(tip) + Number(a);
  output.innerHTML = "Tip: " + tip;
  output2.innerHTML = "Total amount with tip: " + result;
  if(inputC.value != ""){
    var split = result / inputC.value;
    output3.innerHTML = "Each pays: " + split.toFixed(2);
  }
});

var calculate2Button = document.getElementById("calculate_button-Total");
var outputDif = document.getElementById("output_dif");

calculate2Button.addEventListener("click", function() {
  var d = inputD.value;
  var e = inputE.value;
  var f = inputF.value;

  var result1 = e-d;

  outputDif.innerHTML = "Tip is: " + result1;

  if(inputF.value != ""){
    var split = inputE.value / inputF.value;
    output4.innerHTML = "Each pays: " + split.toFixed(2);
  }
});
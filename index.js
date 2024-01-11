//display functon
function appendNumbers(num) {
  var displayValue = document.getElementById("display").value;
  if (displayValue == "0") {
    document.getElementById("display").value = "";
  } else if (displayValue == "Error") {
    document.getElementById("display").value = "";
  } else if(displayValue.includes('=')){
    document.getElementById("display").value = "";
  }
  document.getElementById("display").value += num;
}

//display functon2
function appendOperators(operator) {
  var displayValue = document.getElementById("display").value;
  if(displayValue.includes('=')){
    document.getElementById("display").value = displayValue.substring(1);
    document.getElementById("display").value += operator;
  }else if (/[\/*+\-%]$/.test(displayValue)){
    document.getElementById("display").value = displayValue.slice(0, -1) + operator;
  }else{
    document.getElementById("display").value += operator;
  }
  
}

//display decimal
function appendDecimal() {
  var displayValue = document.getElementById("display").value;
  if (displayValue !== ".") {
    document.getElementById("display").value += ".";
  }
}

//calculate functon
function calculate() {
  var displayValue = document.getElementById("display").value;
  try {
    var result = eval(displayValue);
    document.getElementById("display").value ="= "+ result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

//clear function
function allclear() {
  document.getElementById("display").value = "0";
}

function clearLastEntry() {
  var displayValue = document.getElementById("display").value;
  if (displayValue !== "0") {
    document.getElementById("display").value = displayValue.slice(0, -1);
    if (displayValue.length === 1) {
      document.getElementById("display").value = "0";
    }if(displayValue.includes('=')){
   document.getElementById("display").value = displayValue.substring(1);
}
  }
}

function fullScreen() {
  elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

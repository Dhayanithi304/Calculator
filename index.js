//display functon
function appendNumbers(num) {
  const displayValue = document.getElementById("display").value;
  if (displayValue == "0") {
    document.getElementById("display").value = "";
  } else if (displayValue == "Error") {
    document.getElementById("display").value = "";
  } else if (displayValue.includes("=")) {
    document.getElementById("display").value = "";
  }
  document.getElementById("display").value += num;
  fontChange();
}

//display functon2
function appendOperators(operator) {
  const displayValue = document.getElementById("display").value;
  if (displayValue.includes("=")) {
    document.getElementById("display").value = displayValue.substring(1);
    document.getElementById("display").value += operator;
  } else if (/[\/*+\-%]$/.test(displayValue)) {
    document.getElementById("display").value =
      displayValue.slice(0, -1) + operator;
  } else {
    document.getElementById("display").value += operator;
  }
  fontChange();
}

function fontChange() {
  const displayValue = document.getElementById("display").value;
  for (let i = 0; i < displayValue.length; i++) {
    if (displayValue.length >= 16) {
      document.getElementById("display").style.fontSize = "35px";
      document.getElementById("display").style.paddingTop = "285px";
    } else if (displayValue.length >= 14) {
      document.getElementById("display").style.fontSize = "40px";
      document.getElementById("display").style.paddingTop = "280px";
    } else if (displayValue.length > 12) {
      document.getElementById("display").style.fontSize = "45px";
      document.getElementById("display").style.paddingTop = "275px";
    } else if (displayValue.length < 12) {
      document.getElementById("display").style.fontSize = "50px";
      document.getElementById("display").style.paddingTop = "270px";
    }
  }
}

//display decimal
function appendDecimal() {
  const displayValue = document.getElementById("display").value;
  if (displayValue !== ".") {
    document.getElementById("display").value += ".";
  }
  fontChange();
}
function appendPercentage() {
  let displayValue = document.getElementById("display").value;
  let percentageValue = parseFloat(displayValue) / 100;
  document.getElementById("display").value = percentageValue;
  fontChange();
}

//calculate functon
function calculate() {
  const displayValue = document.getElementById("display").value;
  const index = displayValue.length - 1;
  console.log(index);
  if (/[\/*+\-%]$/.test(displayValue[index])) {
    document.getElementById("display").value = displayValue.slice(0, -1);
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = "= " + result;
  } else {
    const result = eval(displayValue);
    document.getElementById("display").value = "= " + result;
  }
  fontChange();
}

//clear function
function allclear() {
  document.getElementById("display").value = "0";
  fontChange();
}

function clearLastEntry() {
  const displayValue = document.getElementById("display").value;
  if (displayValue !== "0") {
    document.getElementById("display").value = displayValue.slice(0, -1);
    if (displayValue.length === 1) {
      document.getElementById("display").value = "0";
    }
    if (displayValue.includes("=")) {
      document.getElementById("display").value = displayValue.substring(1);
    }
  }
  fontChange();
}

function fullScreen() {
  const elem = document.documentElement;
  const fscreen = document.getElementById("fscreen");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    fscreen.value = "<";
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
    fscreen.value = "<";
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
    fscreen.value = "<";
  }

  if ((fscreen.value = "<")) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fscreen.value = "F";
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
      fscreen.value = "F";
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
      fscreen.value = "F";
    }
  }
}

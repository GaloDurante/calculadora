let result = document.getElementById("result");

function updateDisplay(value) {
  result.value += value;
}

function limpiar() {
  result.value = "";
}

function borrar() {
    let currentValue = result.value;
    result.value = currentValue.substring(0, currentValue.length - 1);
  }

function calcular() {
    let expression = result.value;
    let regex = /(\d+)([+\-*\/])(\d+)/;
    let matches = expression.match(regex);
  
    if (matches) {
      let num1 = parseFloat(matches[1]);
      let operator = matches[2];
      let num2 = parseFloat(matches[3]);
  
      switch (operator) {
        case "+":
          result.value = num1 + num2;
          break;
        case "-":
          result.value = num1 - num2;
          break;
        case "*":
          result.value = num1 * num2;
          break;
        case "/":
          result.value = num1 / num2;
          break;
      }
    }
  }
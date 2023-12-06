// Variables
let displayValue = '';

// Funciones
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function clearEntry() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function changeSign() {
  if (displayValue !== '' && displayValue !== 'Error') {
      displayValue = (parseFloat(displayValue) * -1).toString();
      document.getElementById('display').value = displayValue;
  }
}

function squareRoot() {
  if (displayValue !== '' && displayValue !== 'Error') {
      displayValue = Math.sqrt(parseFloat(displayValue)).toString();
      document.getElementById('display').value = displayValue;
  }
}

function appendFunction(value) {
  if (displayValue !== '' && displayValue !== 'Error') {
      displayValue += value;
      document.getElementById('display').value = displayValue;
  }
}

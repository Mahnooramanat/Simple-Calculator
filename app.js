let displayValue = '';
let DEL='';
function appendValue(value) {
  displayValue +=value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
  console.log('displayValue');
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}


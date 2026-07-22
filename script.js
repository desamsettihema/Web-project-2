const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (!/^[0-9+\-*/.%\s]+$/.test(display.value)) {
      display.value = 'Error';
      return;
    }
    display.value = eval(display.value.replace(/%/g, '/100*'));
  } catch (e) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  if (/[0-9+\-*/.%]/.test(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
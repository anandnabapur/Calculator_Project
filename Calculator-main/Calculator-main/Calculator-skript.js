// Wähle das Display
const display = document.querySelector('.display');

// Wähle alle klickbaren Buttons
const buttons = document.querySelectorAll('.clickable');

// Füge Klick-Logik hinzu
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    handleButtonClick(value);
  });
});

document.addEventListener('keyup', event => {
  if (event.key === 'Escape') {
    if (display.textContent.length > 0) {
      display.textContent = '';
    }
  }
});

// Funtion zur Verabeitung der Keyboard eingaben
document.addEventListener('keyup', event => {
  if (event.key === 'Backspace') {
    if (display.textContent.length > 0) {
      display.textContent = display.textContent.slice(0, -1);
    }
  }
});

document.addEventListener('keydown', event => {
  if (event.key >= '0' && event.key <= '9') {
    display.textContent += event.key;
  } else if (event.key === `.`){
    if (!display.textContent.includes(`.`)) {
      display.textContent += `.`;
    }
  } else if ([`+`, `-`, `*`, `/`].includes(event.key)) {
    display.textContent += event.key;
  } else if (event.key === `Enter`){
    try {
      display.textContent = eval(display.textContent); 
    } catch (error) {
      display.textContent = 'Error';
    }
  }
});


// Funktion zur Verarbeitung der Button-Klicks
function handleButtonClick(value) {
  if (value === 'AC') {
    display.textContent = '';
  } else if (value === '<-') {
    display.textContent = display.textContent.slice(0, -1);
  } else if (value === '=') {
    try {
      display.textContent = eval(display.textContent); 
    } catch (error) {
      display.textContent = 'Error';
    }
  } else if (value === '+/-') {
    toggleSign();
  } else if (value === '%') {
    calculatePercentage();
  } else {
    display.textContent += value;
  }
}

// Funktion zum Umkehren des Vorzeichens
function toggleSign() {
  const currentValue = display.textContent;
  if (currentValue !== '' && !isNaN(currentValue)) { 
    display.textContent = -parseFloat(currentValue); 
  }
}

// Funktion zur Berechnung des Prozentwerts
function calculatePercentage() {
  const currentValue = display.textContent;
  if (currentValue !== '' && !isNaN(currentValue)) { 
    display.textContent = parseFloat(currentValue) / 100;
  }
}

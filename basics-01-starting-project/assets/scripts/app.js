let currentResult = 0;

function add() {
  if (typeof userInput.value !== 'number') {
        throw { message: 'Invalid input', name: 'add' };
  }

  currentResult = currentResult + userInput.value;
  outputResult(currentResult, `Rssult: ${currentResult}`);
}

addBtn.addEventListener('click', add);

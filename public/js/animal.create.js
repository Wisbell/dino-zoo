function createAnimal() {

  const dinoForm = document.querySelector('form');
  const nameInput  = dinoForm.querySelector('input[name=name]');
  const speciesInput = dinoForm.querySelector('input[name=species]');
  const genderSelect = dinoForm.querySelector('#gender');
  const ageInput = dinoForm.querySelector('input[name=age]');
  const numberOfKillsInput = dinoForm.querySelector('input[name=numberOfKills]');
  const imageUrlInput = dinoForm.querySelector('input[name=imageUrl]');
  const categorySelect = dinoForm.querySelector('#category');
  const trainerSelect = dinoForm.querySelector('#trainer');

  const newAnimal = {
    id: '',
    name: nameInput.value,
    species: speciesInput.value,
    gender: genderSelect.value,
    age: ageInput.value,
    numberOfKills: numberOfKillsInput.value,
    imageUrl: imageUrlInput.value,
    category: categorySelect.value,
    trainerId: setTrainer(trainerSelect.value),
    keeperIds: getKeeperCheckboxValues()
  }

  fetch('/animals', {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAnimal),
  })
  .then((response) => response.json())
  .then((response) => {
    const responseHasErrorStatusCode =
      checkIfResponseHasErrorStatusCode(response); // utilities.js

    if (responseHasErrorStatusCode)
      handleHttpError(response); // utilities.js
    else
      goTo('/animals'); // utilities.js
  })
  .catch((error) => {
    console.warn('Error:', error);
  });
}

function setTrainer(trainerValue) {
  if (!trainerValue)
    return null;
  else
    return trainerValue;
}

// Return array of strings or null
function getKeeperCheckboxValues() {
  const checkboxElements = document.querySelectorAll('input[id^="keeper"]');
  const checkedBoxes = [];

  checkboxElements.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedBoxes.push(checkbox.value);
    }
  });

  if (checkedBoxes.length > 0)
    return checkedBoxes;
  else
    return null;
}
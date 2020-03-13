function updateAnimal() {

  const dinoForm = document.querySelector('form');
  const idInput  = dinoForm.querySelector('input[name=id]');
  const nameInput  = dinoForm.querySelector('input[name=name]');
  const speciesInput = dinoForm.querySelector('input[name=species]');
  const genderSelect = dinoForm.querySelector('#gender');
  const ageInput = dinoForm.querySelector('input[name=age]');
  const numberOfKillsInput = dinoForm.querySelector('input[name=numberOfKills]');
  const imageUrlInput = dinoForm.querySelector('input[name=imageUrl]');
  const categorySelect = dinoForm.querySelector('#category');
  const trainerSelect = dinoForm.querySelector('#trainer');

  const updatedAnimal = {
    id: idInput.value,
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

  fetch(`/animals/${idInput.value}`, {
    method: 'PUT',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedAnimal),
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
    console.error('Error:', error);
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
function createAnimal() {

  const dinoForm = document.querySelector('form');
  const nameInput  = dinoForm.querySelector('input[name=name]');
  const speciesInput = dinoForm.querySelector('input[name=species]');
  const genderSelect = dinoForm.querySelector('#gender');
  const ageInput = dinoForm.querySelector('input[name=age]');
  const numberOfKillsInput = dinoForm.querySelector('input[name=numberOfKills]');
  const imageUrlInput = dinoForm.querySelector('input[name=imageUrl]');

  const newAnimal = {
    name: nameInput.value,
    species: speciesInput.value,
    gender: genderSelect.value,
    age: ageInput.value,
    numberOfKills: numberOfKillsInput.value,
    imageUrl: imageUrlInput.value
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
  .then((data) => {
    console.log('Successfully added dinosaur:', data);
    goTo('/animals'); // utilities.js
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateAnimal() {

  const dinoForm = document.querySelector('form');
  const idInput  = dinoForm.querySelector('input[name=id]');
  const nameInput  = dinoForm.querySelector('input[name=name]');
  const speciesInput = dinoForm.querySelector('input[name=species]');
  const genderSelect = dinoForm.querySelector('#gender');
  const ageInput = dinoForm.querySelector('input[name=age]');
  const numberOfKillsInput = dinoForm.querySelector('input[name=numberOfKills]');

  const updatedAnimal = {
    name: nameInput.value,
    species: speciesInput.value,
    gender: genderSelect.value,
    age: ageInput.value,
    numberOfKills: numberOfKillsInput.value
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
  .then((data) => {
    console.log('Successfully updated Dino:', data);
    goTo('/animals');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function goTo(url) {
  window.location = url;
}


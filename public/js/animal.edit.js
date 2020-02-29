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

  const updatedAnimal = {
    name: nameInput.value,
    species: speciesInput.value,
    gender: genderSelect.value,
    age: ageInput.value,
    numberOfKills: numberOfKillsInput.value,
    imageUrl: imageUrlInput.value,
    category: categorySelect.value
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
    console.log('response', response);
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

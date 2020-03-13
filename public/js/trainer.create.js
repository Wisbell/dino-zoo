function createTrainer() {

  const trainerForm = document.querySelector('form');
  const firstNameInput  = trainerForm.querySelector('input[name=firstName]');
  const lastNameInput  = trainerForm.querySelector('input[name=lastName]');
  const genderSelect = trainerForm.querySelector('#gender');
  const ageInput = trainerForm.querySelector('input[name=age]');
  const dateOfHireInput = trainerForm.querySelector('input[name=dateOfHire]');
  const imageUrlInput = trainerForm.querySelector('input[name=imageUrl]');
  const trickExpertiseInput = trainerForm.querySelector('input[name=trickExpertise]');

  const newTrainer = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    gender: genderSelect.value,
    age: ageInput.value,
    dateOfHire: dateOfHireInput.value,
    imageUrl: imageUrlInput.value,
    trickExpertise: trickExpertiseInput.value
  }

  fetch('/personnel/trainers', {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTrainer),
  })
  .then((response) => response.json())
  .then((response) => {
    const responseHasErrorStatusCode =
      checkIfResponseHasErrorStatusCode(response); // utilities.js

    if (responseHasErrorStatusCode)
      handleHttpError(response); // utilities.js
    else
      goTo('/personnel'); // utilities.js
  })
  .catch((error) => {
    console.warn('Error:', error);
  });
}

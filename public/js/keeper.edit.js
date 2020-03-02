function updateKeeper() {

  const keeperForm = document.querySelector('form');
  const idInput  = keeperForm.querySelector('input[name=id]');
  const firstNameInput  = keeperForm.querySelector('input[name=firstName]');
  const lastNameInput  = keeperForm.querySelector('input[name=lastName]');
  const genderSelect = keeperForm.querySelector('#gender');
  const ageInput = keeperForm.querySelector('input[name=age]');
  const dateOfHireInput = keeperForm.querySelector('input[name=dateOfHire]');
  const imageUrlInput = keeperForm.querySelector('input[name=imageUrl]');
  const dinosaurSpecialityInput = keeperForm.querySelector('input[name=dinosaurSpeciality]');

  const updatedKeeper = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    gender: genderSelect.value,
    age: ageInput.value,
    dateOfHire: dateOfHireInput.value,
    imageUrl: imageUrlInput.value,
    dinosaurSpeciality: dinosaurSpecialityInput.value
  }

  fetch(`/personnel/keepers/${idInput.value}`, {
    method: 'PUT',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedKeeper),
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
    console.error('Error:', error);
  });
}

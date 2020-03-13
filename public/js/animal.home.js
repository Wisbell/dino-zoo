async function deleteAnimal(id) {
  const audio = new Audio("./sound/you-didn't-say-the-magic-word.mp3");
  audio.play();

  await delay(1000); // utilities.js

  var result = confirm("Are you sure?");

  if (result) {
    fetch(`/animals/${id}`, {
      method: 'DELETE',
      mode: 'same-origin'
    })
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
}

function setActiveTab(tab) {
  switch(tab) {
    case 'allTab':
      document.querySelector('#allTab').classList.add('is-active');
      document.querySelector('#keepersTab').classList.remove('is-active');
      document.querySelector('#trainersTab').classList.remove('is-active');
      document.querySelector('#keepers').classList.remove('is-hidden');
      document.querySelector('#trainers').classList.remove('is-hidden');
      break;
    case 'keepersTab':
      document.querySelector('#allTab').classList.remove('is-active');
      document.querySelector('#keepersTab').classList.add('is-active');
      document.querySelector('#trainersTab').classList.remove('is-active');
      document.querySelector('#keepers').classList.remove('is-hidden');
      document.querySelector('#trainers').classList.add('is-hidden');
      break;
    case 'trainersTab':
      document.querySelector('#allTab').classList.remove('is-active');
      document.querySelector('#keepersTab').classList.remove('is-active');
      document.querySelector('#trainersTab').classList.add('is-active');
      document.querySelector('#keepers').classList.add('is-hidden');
      document.querySelector('#trainers').classList.remove('is-hidden');
      break;
    default:
      break;
  }
}

// TODO: Add functionality to hide/show choice

async function deleteTrainer(id) {
  const audio = new Audio("./sound/you-didn't-say-the-magic-word.mp3");
  audio.play();

  await delay(1000); // utilities.js

  var result = confirm("Are you sure?");

  if (result) {
    fetch(`/personnel/trainers/${id}`, {
      method: 'DELETE',
      mode: 'same-origin'
    })
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
}

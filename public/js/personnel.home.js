function setActiveTab(tabName) {
  switch(tabName) {
    case 'all':
      document.querySelector('#all').classList.add('is-active')
      document.querySelector('#keepers').classList.remove('is-active')
      document.querySelector('#trainers').classList.remove('is-active')
      break;
    case 'keepers':
      document.querySelector('#all').classList.remove('is-active')
      document.querySelector('#keepers').classList.add('is-active')
      document.querySelector('#trainers').classList.remove('is-active')
      break;
    case 'trainers':
      document.querySelector('#all').classList.remove('is-active')
      document.querySelector('#keepers').classList.remove('is-active')
      document.querySelector('#trainers').classList.add('is-active')
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

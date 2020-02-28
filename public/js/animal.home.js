function deleteAnimal(id) {
  var result = confirm("Are you sure?");

  if (result) {
    fetch(`/animals/${id}`, {
      method: 'DELETE',
      mode: 'same-origin'
    })
    .then((response) => {
      console.log('Successfully deleted dino:', response);
      goTo('/animals'); // utilities.js
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

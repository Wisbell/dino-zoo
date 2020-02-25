function createAnimal() {

  console.log('click');
  const form = document.querySelector('form');
  console.log('form', form);
  const data = new FormData(form);
  console.log('data', data);
}

function goTo(url) {
  window.location = url;
}
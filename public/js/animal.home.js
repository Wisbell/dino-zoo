fetch('/api/animals')
.then((data) => {
  console.log('Successfully got Dinos:', data.json());
  // console.log('Successfully got Dinos:', data.text());
  // console.log('Successfully got Dinos:', JSON.parse(data.text()));
})
.catch((error) => {
  console.error('Error:', error);
});
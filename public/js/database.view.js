// NOTE: Keeping this code just in case

// async function clearTable(table) {
//   fetch(`/seeder/${table}`, {
//     method: 'DELETE',
//     mode: 'same-origin'
//   })
//   .then(async (response) => {
//     const responseHasErrorStatusCode =
//       checkIfResponseHasErrorStatusCode(response); // utilities.js

//     if (responseHasErrorStatusCode)
//       handleHttpError(response); // utilities.js
//     else {
//       bulmaToast.toast({
//         message: `Successfully deleted ${table} from database.`,
//         type: "is-success",
//         position: "bottom-center",
//         duration: 2500,
//         animate: { in: 'fadeIn', out: 'fadeOut' }
//       });

//       await delay(1500); // utilities.js

//       if (table === 'animals')
//         goTo('/animals'); // utilities.js
//       else
//         goTo('/personnel'); // utilities.js
//     }
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// }

// async function populate(table) {
//   fetch(`/seeder/${table}`, {
//     method: 'POST',
//     mode: 'same-origin'
//   })
//   .then(async (response) => {
//     const responseHasErrorStatusCode =
//       checkIfResponseHasErrorStatusCode(response); // utilities.js

//     if (responseHasErrorStatusCode)
//       handleHttpError(response); // utilities.js
//     else {
//       bulmaToast.toast({
//         message: `Successfully added ${table} to database.`,
//         type: "is-success",
//         position: "bottom-center",
//         duration: 2500,
//         animate: { in: 'fadeIn', out: 'fadeOut' }
//       });

//       await delay(1500); // utilities.js

//       if (table === 'animals')
//         goTo('/animals'); // utilities.js
//       else
//         goTo('/personnel'); // utilities.js
//     }
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// }

async function resetDatabase() {
  fetch(`/seeder/reset`, {
    method: 'DELETE',
    mode: 'same-origin'
  })
  .then(async (response) => {
    const responseHasErrorStatusCode =
      checkIfResponseHasErrorStatusCode(response); // utilities.js

    if (responseHasErrorStatusCode)
      handleHttpError(response); // utilities.js
    else {
      bulmaToast.toast({
        message: `Successfully reset table data`,
        type: "is-success",
        position: "bottom-center",
        duration: 2500,
        animate: { in: 'fadeIn', out: 'fadeOut' }
      });

      await delay(1500); // utilities.js

      goTo('/'); // utilities.js
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
function goTo(url) {
  window.location = url;
}

function handleHttpError(response) {
  const errorType = getHttpErrorType(response);
  let message;

  if (errorType === 'client')
    message = "Sorry, there was an error on your end.  Check your data";
  if (errorType === 'server')
    message = "Sorry, there was an error on our end.  Try again later";

  bulmaToast.toast({
    message,
    type: "is-warning",
    position: "bottom-center",
    duration: 2500,
    animate: { in: 'fadeIn', out: 'fadeOut' }
   });
}

function checkIfResponseHasErrorStatusCode(httpResponse) {
  // Valid JSON response will not be object with statusCode property
  if (!httpResponse.statusCode)
    return false;

  const clientError = checkIfResponseIsClientError(httpResponse);
  const serverError = checkIfResponseIsServerError(httpResponse);

  if (clientError || serverError)
    return true;

  return false;
}

function checkIfResponseIsClientError(httpResponse) {
  const statusCode = httpResponse.statusCode.toString();
  const firstCharacter = getFirstCharacterOfString(statusCode);


  if (firstCharacter === '4')
    return true;

  return false;
}

function checkIfResponseIsServerError(httpResponse) {
  const statusCode = httpResponse.statusCode.toString();
  const firstCharacter = getFirstCharacterOfString(statusCode);

  if (firstCharacter === '5')
    return true;

  return false;
}

function getHttpErrorType(httpResponse) {
  const statusCode = httpResponse.statusCode.toString();
  const firstCharacter = getFirstCharacterOfString(statusCode);

  if (firstCharacter === '4')
    return 'client'

  if (firstCharacter === '5')
    return 'server'
}

function getFirstCharacterOfString(string) {
  return string.charAt(0);
}

const delay = ms => new Promise(res => setTimeout(res, ms));
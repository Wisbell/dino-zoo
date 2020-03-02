// https://wikiki.github.io/form/slider/

// Find output DOM associated to the DOM element passed as parameter
function findOutputForSlider( element ) {
  var idVal = element.id;
  outputs = document.getElementsByTagName( 'output' );
  for( var i = 0; i < outputs.length; i++ ) {
    if ( outputs[ i ].htmlFor == idVal )
      return outputs[ i ];
  }
}

function getSliderOutputPosition( slider ) {
  // Update output position
  var newPlace,
      minValue;

  var style = window.getComputedStyle( slider, null );
  // Measure width of range input
  sliderWidth = parseInt( style.getPropertyValue( 'width' ), 10 );

  // Figure out placement percentage between left and right of input
  if ( !slider.getAttribute( 'min' ) ) {
    minValue = 0;
  } else {
    minValue = slider.getAttribute( 'min' );
  }
  var newPoint = ( slider.value - minValue ) / ( slider.getAttribute( 'max' ) - minValue );

  // Prevent bubble from going beyond left or right (unsupported browsers)
  if ( newPoint < 0 ) {
    newPlace = 0;
  } else if ( newPoint > 1 ) {
    newPlace = sliderWidth;
  } else {
    newPlace = sliderWidth * newPoint;
  }

  return {
    'position': newPlace + 'px'
  }
}

document.addEventListener( 'DOMContentLoaded', function () {

  const audio = new Audio("./sound/creaky_door_4.mp3");
  audio.volume = .25; // Default volume

  // Get all document sliders
  var sliders = document.querySelectorAll( 'input[type="range"].slider' );
  [].forEach.call( sliders, function ( slider ) {
    var output = findOutputForSlider( slider );
    if ( output ) {
      if ( slider.classList.contains( 'has-output-tooltip' ) ) {
        // Get new output position
        var newPosition = getSliderOutputPosition( slider );

        // Set output position
        output.style[ 'left' ] = newPosition.position;
      }

      // Add event listener to update output when slider value change
      slider.addEventListener( 'input', function( event ) {
        if ( event.target.classList.contains( 'has-output-tooltip' ) ) {
          // Get new output position
          var newPosition = getSliderOutputPosition( event.target );

          // Set output position
          output.style[ 'left' ] = newPosition.position;
        }

        // Update output with slider value
        output.value = event.target.value;

        // Control audio volume when slider changes
        audio.volume = event.target.value / 100;
      });
    }
  });

  /**********************/
  /* Open Jurassic Door */
  /**********************/

  const door = document.getElementById('jurassicParkDoor');

  door.addEventListener('click', (event) => {
    try {
      audio.play();

      setTimeout( () => {
        window.location.href = '/animals';
      }, 3500);
    } catch (error) {
      window.location.href = '/animals';
    }
  });
});
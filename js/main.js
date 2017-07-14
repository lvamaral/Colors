import View from './view';
import Game from './game';
import Colors from './colors';
import Level from './level';

$( () => {
    new Level(1)
});

$('body').bind('touchend', function(e) {
  e.preventDefault();
  // Add your code here.
  $(this).click();
  // This line still calls the standard click event, in case the user needs to interact with the element that is being clicked on, but still avoids zooming in cases of double clicking.
})

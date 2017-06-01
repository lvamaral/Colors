import View from './view';
import Game from './game';
import Colors from './colors';
import Level from './level';

$( () => {
  localStorage.removeItem("level")
  console.log(localStorage.getItem("level"));
  if (localStorage.getItem("level") != null) {
    new Level(localStorage.getItem("level"))
  } else {
    new Level(1)
  }

});

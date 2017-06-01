import View from './view';
import Game from './game';
import Colors from './colors';

$( () => {
  let level = 1;

  const view = new View(level);
  const game = new Game(level, view);
});

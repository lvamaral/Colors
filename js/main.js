import View from './view';
import Game from './game';

window.level = 0

$( () => {
  const rootEl = $('#grid');
  const game = new Game(level);
  new View(game, rootEl);
});

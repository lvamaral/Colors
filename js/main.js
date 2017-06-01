import View from './view';
import Game from './game';
import Colors from './colors';

$( () => {
  // console.log($.cookie("level"));
  // // if ($.cookie("level") === undefined) {
  // //   var level = 2
  // // }
  let level = 1;

  const view = new View(level);
  const game = new Game(level, view);
});

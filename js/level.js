import View from './view';
import Game from './game';
import Colors from './colors';


class Level {
  constructor(level){
    this.level = level
    var view = new View(level)
    var game = new Game(this, view);
    this.game = game;
    // this.checkForWin();
  }

  checkForWin(){
   if (this.game.isWon()) {
     $(".cell").remove();
     $(".row").remove();
     this.game.called = [];
     this.game.colorHash = {};
     this.game.level += 1;
     this.game.view = null;
     this.game.moves = 0;
     delete this.view;
     this.level += 1
     let view = new View(this.level)
     this.game = new Game(this, view);
   }
  }


}

export default Level;

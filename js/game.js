import View from './view';
var includes = require('lodash.includes');

class Game {
  constructor(level, view){
    this.colors = view.colors
    this.grid = view.grid
    this.level = level;
    this.interval = "";
    this.rows = $(".row").length
    this.cols = $(".cell").length/this.rows
    this.moves = 0


    if (this.level === 1) {
      this.selectStarting()
    };
    this.setStartingCounters(this.level);
    this.clickControls();
  }

  selectStarting(){
    // var interval = setInterval(function(){$(".cell").first().toggleClass("selected")}, 750)
    $(".tooltiptext").css("visibility", "visible")
  }

  setStartingCounters(level){
    $("#level").text(`Level: ${level}`);
    $("#move-display").text(`Moves: ${this.moves}`);
  }

  isWon(){
    var colorsPresent = new Set();
    $(".cell").each( (index, el) => {
      colorsPresent.add($(el).data("color"))
      })
      if (colorsPresent.size === 1) {
        console.log("WON!");
        return true;
      } else {
        return false;
      }
  }

  restartGame(){
    $(".row").remove();
    $(".cell").remove();
    this.level += 1;
    const view = new View(this.level);
    const game = new Game(this.level, view);
  }

  clickControls(){
    $(".color-choice").click(this.pickColor.bind(this))
  }

  pickColor(e){
    e.preventDefault;
    var pickedColor = $(e.target).data("color");
    this.moves += 1;
    $("#move-display").text(`Moves: ${this.moves}`);
    this.convertColors(pickedColor);

  }

  convertColors(pickedColor){
    var starting = $(".cell").first();
    var startingColor = starting.data("color")
    starting.css("background-color", this.colors[pickedColor]);
    starting.data("color", pickedColor);
    var currentSet = [];
    this.adjacentSquares(starting, startingColor, currentSet);
  }

  adjacentSquares(starting, startingColor, currentSet){
    var currentSet = currentSet
    var pos = starting.attr("id").split(",").map((el) => parseInt(el))
    currentSet.push(pos)
    var temp = pos;
    let potential = [];
    potential.push([temp[0]-1, temp[1]]);
    potential.push([temp[0], temp[1]+1]);
    potential.push([temp[0], temp[1]-1]);
    potential.push([temp[0]+1, temp[1]]);
    for (var i = 0; i < potential.length; i++) {
      console.log(potential[i]);
      console.log(currentSet);
      console.log(_.includes(currentSet, potential[i]));
      if (this.inBounds(potential[i]) && this.sameColor(startingColor, potential[i]) && !currentSet.includes(potential[i])) {
        currentSet.push(potential[i]);
        this.colorOne(potential[i], starting.data("color"))
        if (this.isWon()) {
          this.restartGame()
        } else {
          this.adjacentSquares($(document.getElementById(potential[i].toString())), startingColor, currentSet)
        }

      }
    }

  }

  inBounds(pos){
    if (pos[0]>-1 && pos[1]>-1 && pos[0]<=this.rows && pos[1]<=this.cols ) {
      return true
    } else {
      return false
    }
  }

  sameColor(color, pos) {
    var cell = document.getElementById(pos.toString())
    if ($(cell).data("color") === color) {
      return true;
    } else {
      return false;
    }
  }

  colorOne(pos, pickedColor){
    var cell = document.getElementById(pos.toString())
    $(cell).css("background-color", this.colors[pickedColor])
    $(cell).data("color", pickedColor);
  }

}





export default Game

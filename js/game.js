import View from './view';
import {includes, isEqual} from 'lodash'
// var includes = require('lodash.includes');

class Game {
  constructor(level, view){
    this.view = view;
    this.colors = view.colors
    this.grid = view.grid
    this.level = level;
    this.interval = "";
    this.rows = $(".row").length
    this.cols = $(".cell").length/this.rows
    this.moves = 0
    this.colorHash = this.constructHash();
    this.called = [];


    if (this.level === 1) {
      this.selectStarting()
    } else if (this.level === 2) {
      this.endTut();
      this.gjMsg(this.level);
    } else {
      this.gjMsg(this.level);
    }

    this.setStartingCounters(this.level);
    this.clickControls();
  }

  selectStarting(){
    // var interval = setInterval(function(){$(".cell").first().toggleClass("selected")}, 750)
    $(".tooltiptext").css("visibility", "visible")
  }

  endTut(){
    $(".tooltiptext").css("visibility", "hidden")
  }

  gjMsg(lvl){
    const messages = ["Good job!", "Great!", "Nice!", "Wow!", "You da best!",
    "Rockstart!", "You're Killing It!", "OMG Nice!", "How Are You Still Playing?? Jk GJ!",
    "WOWWWWW!", "DAYUM!", "HOLY SH*T!", "OK THIS ONE's ROUGH!",
    "Good job!", "Great!", "Nice!", "Wow!", "You da best!",
    "Rockstart!", "You're Killing It!", "OMG Nice!", "How Are You Still Playing?? Jk GJ!",
    "WOWWWWW!", "DAYUM!", "HOLY SH*T!", "OK THIS ONE's ROUGH!",
    "Good job!", "Great!", "Nice!", "Wow!", "You da best!",
    "Rockstart!", "You're Killing It!", "OMG Nice!", "How Are You Still Playing?? Jk GJ!",
    "WOWWWWW!", "DAYUM!", "HOLY SH*T!", "OK THIS ONE's ROUGH!"];
    $("#message").text(messages[lvl]).fadeOut(1000)
  }

  setStartingCounters(level){
    $("#level").text(`Level: ${level}`);
    $("#move-display").text(`Moves: ${this.moves}`);
  }

  constructHash(){
    var colorHash = {}
    $(".cell").each( (index, el) => {
      let cell = $(el)
      colorHash[cell.data("pos")] = cell.data("color")
      })

      return colorHash;
  }

  isWon(){
    var colorsPresent = new Set();
    $(".cell").each( (index, el) => {
      colorsPresent.add($(el).data("color"))
      })
      if (colorsPresent.size === 1) {
        console.log("WON!");
        this.restartGame();
        return true;
      } else {
        return false;
      }
  }

  restartGame(){
    $(".row").remove();
    $(".cell").remove();
    this.called = [];
    this.colorHash = {};
    this.level += 1;
    this.view = null;
    delete this.view;
    const view = new View(this.level);
    const game = new Game(this.level, view);
  }

  clickControls(){
    $(".color-choice").click(this.pickColor.bind(this))
    $("#info").click(() => $("#tutorial").toggle())

  }

  pickColor(e){
    e.preventDefault;
    if (this.level === 1) {
      $(".tooltiptext").hide();
    }
    var pickedColor = $(e.target).data("color");
    this.moves += 1;
    $("#move-display").text(`Moves: ${this.moves}`);
    // var starting = $(".cell").first().data("pos");
    if (!this.called.includes('0,0')) {
      this.called.push('0,0')
    }
    this.getAllPos('0,0', pickedColor)
    this.called = [];
  }

  getAllPos(s_pos, pickedColor){
    let temp = s_pos.split(",").map(el => parseInt(el))
    let potential = [];
    potential.push([temp[0]-1, temp[1]].join());
    potential.push([temp[0], temp[1]+1].join());
    potential.push([temp[0], temp[1]-1].join());
    potential.push([temp[0]+1, temp[1]].join());
    Object.keys(this.colorHash).forEach( (pos) => {
      if (potential.includes(pos) && this.colorHash[pos] === this.colorHash[s_pos] && !this.called.includes(pos)) {
        this.called.push(pos)
        this.getAllPos(pos, pickedColor)
      }
    })
    this.colorOne(s_pos,pickedColor)
    this.isWon();
  }

  colorOne(pos, pickedColor){
    var cell = document.getElementById(pos)
    $(cell).css("background-color", this.colors[pickedColor])
    $(cell).data("color", pickedColor);
    this.colorHash[pos] = pickedColor
  }

}





export default Game

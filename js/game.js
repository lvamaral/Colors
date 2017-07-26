import View from './view';
import {includes, isEqual} from 'lodash';
import Level from './level';

class Game {
  constructor(Level, view){
    this.Level = Level;
    this.level = Level.level;
    this.view = view;
    this.colors = view.colors;
    this.interval = "";
    this.moves = 0;
    this.colorHash = this.constructHash();
    this.called = [];
    this.maxMoves = this.level + 8;
    this.lastColor = "";


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
    this.isMobile();
  }

  isMobile(){
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (/Mobi/.test(navigator.userAgent)) {

        $(".fa-mouse-pointer").removeClass("fa-mouse-pointer").addClass("fa-hand-pointer-o")
    }
  }

  selectStarting(){
    $(".tooltiptext").css("visibility", "visible");
    this.interval = window.setInterval(function(){
      $(".color-choice").toggleClass("color-choice-selected");
      $("#star").toggle();
    }, 750);
    if (!sessionStorage.tutorial) {
      if (this.isMobile) {
        setTimeout(function(){$("#info").trigger("click"); }, 100);
      } else {
        setTimeout(function(){$("#info").trigger("click"); }, 1000);
      }

    }

  }

  endTut(){
    $(".tooltiptext").css("visibility", "hidden");
  }

  setStartingCounters(level){
    $("#level").text(`Level: ${level}`);
    $("#moves").text(`${this.moves}`);
    $("#max-moves").text(`${this.maxMoves}`);
    if (this.moves >= this.maxMoves-3) {

      $("#danger-display").addClass("danger")
    } else {
      $("#danger-display").removeClass("danger")
    }
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
        this.restartGame();
      } else {
        return false;
      }
  }

  restartGame(){
    $(".cell").remove();
    $(".row").remove();
    this.called = [];
    this.colorHash = {};
    this.level += 1;
    this.view = null;
    this.moves = 0;
    delete this.view;
    this.Level.game = null
    delete this.Level.game
    this.Level = null
    delete this.Level
    $(".color-choice").unbind("click")
    new Level(this.level)
  }

  clickControls(){
    $(".color-choice").click(this.pickColor.bind(this))
    $("#info").click(() => this.tutorialModal())
  }

  tutorialModal(){
    $("#modal-tutorial").css("visibility", "visible");
    $("#modal-tutorial").click(() => {
      sessionStorage.setItem("tutorial", true);
      $("#modal-tutorial").css("visibility", "hidden");
    })
  }

  loseMessage(){
    $("#modal-lose").show();
    $("#modal-lose").click(() => {
      location.reload();
    })
  }


  pickColor(e){
    e.preventDefault;
    if (this.level === 1) {
      $(".tooltiptext").hide();
    }
    var pickedColor = $(e.target).data("color");
    if (this.lastColor !== pickedColor) {
      this.lastColor = pickedColor
      this.moves += 1;
      this.setStartingCounters(this.level);
      if (this.moves > this.maxMoves) {
        this.loseMessage();
      }

      if (!this.called.includes('0,0')) {
        this.called.push('0,0')
      }
      this.getAllPos('0,0', pickedColor);
      this.called = [];
      window.clearInterval(this.interval);
      $(".color-choice").removeClass("color-choice-selected");
      $("#star").hide();
    }
  }

  getAllPos(s_pos, pickedColor){
    let temp = s_pos.split(",").map(el => parseInt(el));
    let potential = [];
    potential.push([temp[0]-1, temp[1]].join());
    potential.push([temp[0], temp[1]+1].join());
    potential.push([temp[0], temp[1]-1].join());
    potential.push([temp[0]+1, temp[1]].join());
    Object.keys(this.colorHash).forEach( (pos) => {
      if (potential.includes(pos)
      && this.colorHash[pos] === this.colorHash[s_pos]
      && !this.called.includes(pos)) {
        this.called.push(pos)
        this.getAllPos(pos, pickedColor)
      };
    });
    this.colorOne(s_pos,pickedColor);
    this.isWon();
  }

  colorOne(pos, pickedColor){
    var cell = document.getElementById(pos)
    $(cell).css("background-color", this.colors[pickedColor])
    $(cell).data("color", pickedColor);
    this.colorHash[pos] = pickedColor
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
    let msg = $("#message").text(messages[lvl-1])
    msg.fadeIn(100)
    msg.fadeOut(1000)
  }

}





export default Game

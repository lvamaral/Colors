/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

const COLORS =
[
  "447604-6cc551-9ffcdf-52ad9c-47624f",
  "91c4f2-8ca0d7-9d79bc-a14da0-7e1f86",
  "ffc857-e9724c-c5283d-481d24-255f85",
  "540d6e-ee4266-ffd23f-3bceac-0ead69",
  "f6e8ea-ef626c-22181c-312f2f-84dccf",
  "5dfdcb-7cc6fe-f4faff-8789c0-08090a",
  "042a2b-5eb1bf-cdedf6-ef7b45-d84727",
  "292e1e-7f0799-9649cb-afbbf2-d3fff3",
  "292e1e-7f0799-9649cb-afbbf2-d3fff3",
  "9ebc9e-ffcfd2-ffafc5-553e4e-e0479e",
  "8c5383-63372c-4a5899-559cad-c1b2ab",
  "3891a6-4c5b5c-fde74c-db5461-e3655b",
  "eec643-141414-eef0f2-0d21a1-011638",
  "c2f970-44344f-564d80-98a6d4-d3fcd5",
  "de1a1a-e8ebf7-acbed8-f2d398-d78521",
  "331e36-41337a-6ea4bf-c2efeb-ecfee8",
  "6e0d25-ffffb3-dcab6b-774e24-6a381f",
  "e2f1af-e3d888-84714f-5a3a31-31231e",
  "5cc8ff-93867f-343633-7d70ba-dec1ff",
  "f59ca9-f6828c-df57bc-a03e99-371e30",
  "100b00-85cb33-efffc8-a5cbc3-3b341f",
  "0b3954-087e8b-bfd7ea-ff5a5f-c81d25",
  "fcaa67-b0413e-ffffc7-548687-473335",
  "26547c-ef476f-ffd166-06d6a0-fffcf9",
  "9ba2ff-a499be-9e8576-7a542e-2a2e45",
  "011627-fdfffc-2ec4b6-e71d36-ff9f1c",
  "88a2aa-ada296-e2856e-f42c04-0f1a20",
  "423b0b-b5fed9-98cbb4-7ba098-474935",
  "e6fafc-9cfc97-6ba368-515b3a-353d2f",
  "56a3a6-9cfc97-484538-d4eac8-c0d8e0",
  "904c77-e49ab0-ecb8a5-eccfc3-957d95",
  "04151f-183a37-efd6ac-c44900-432534",
  "abd6d3-e8cab0-d9cee2-aec6cf-eddfd0"
]

const COLOR = COLORS[Math.floor(Math.random()*COLORS.length)].split("-").map((el)=> "#"+el)


/* harmony default export */ __webpack_exports__["default"] = (COLOR);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(2);

var includes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash.includes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
    const view = new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */](this.level);
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





/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Color = __webpack_require__(0);

class View {
  constructor(level){
    this.level = level + 1;
    this.colors = Color.default;
    this.grid = [];
    this.cols = 0;
    this.rows = 0;
    this.makeGrid();
  }


  makeGrid(){
    var h = ($('#grid').height())
    var w = ($('#grid').width())
    var area = Math.floor(w*h)
    var level = this.level
    var square_y = (h/level)
    var cols = (w/square_y)
    var rows = level
    this.cols = cols
    this.rows = rows

    this.makeSquares(square_y, cols, rows);;
  }

  makeSquares(square_y, cols, rows) {
    const page_grid = $("#grid")
    for (var i = 0; i < rows; i++) {
      var row = $("<div class='row'></div>")
      for (var j = 0; j < cols; j++) {
        let pos = [i,j]
        let square = $(`<div class="cell" style="height: ${square_y}px;"></div>`)
        // square.data("pos", pos)
        square.attr('id', pos)
        this.grid.push(pos)
        row.append(square)
      }
      page_grid.append(row)
    }
    this.assignColors(grid);
    this.makeFooter();
  }

  makeFooter(){
    $(".color-choice").each( (index, el) => {
      $(el).css("background-color", this.colors[index])
      $(el).data("color", index)
      })

  }

  assignColors() {
    $(".cell").each( (index, el) => {
      $(el).data("color", Math.floor(Math.random()*5));
      })

    this.colorSquares();
  }

  colorSquares(){
    $(".cell").each( (index, el) => {
      var color_i = $(el).data("color")
      $(el).css("background-color", this.colors[color_i])
    })
  }



}

/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colors__ = __webpack_require__(0);




$( () => {
  var level = 1
  const view = new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */](level);
  const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */](level, view)
});


/***/ })
/******/ ]);
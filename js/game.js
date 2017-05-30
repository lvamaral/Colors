class Game {
  constructor(level){
    this.grid = this.makeGrid()
  }


  makeGrid(){
    var h = ($('#grid').height())
    var w = ($('#grid').width())
    console.log(h,w);
    var area = Math.floor(w*h)
    var level = 3
    var square_y = (h/level)
    var cols = (w/square_y)
    var rows = level

    this.makeSquares(square_y, cols, rows);
  }

  makeSquares(square_y, cols, rows) {
    const grid = $("#grid")
    for (var i = 0; i < rows; i++) {
      var row = $("<div class='row'></div>")
      for (var j = 0; j < cols; j++) {
        let square = $(`<div class="unit" style="height: ${square_y}px;"></div>`)
        row.append(square)
      }
      grid.append(row)
    }
  }



}

export default Game

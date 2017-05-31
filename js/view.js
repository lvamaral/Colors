const Color = require('./colors');

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

export default View

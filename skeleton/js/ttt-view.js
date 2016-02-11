var View = function (game, $el) {
  this.$el = $el;
  this.game = game;

  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
    this.$el.on("click", ".square", this.makeMove.bind(this));

};

View.prototype.makeMove = function (e) {
  var currentMark = this.game.currentPlayer;
  var $square = $(e.currentTarget);
  var pos = $square.data("pos");
  e.preventDefault();
  try  {
    this.game.playMove(pos);
  }
  catch(error) {
    return alert("Invalid move, try again!");
  }

  $square.css("background-color", "white");
  $square.text(currentMark);
  $square.addClass(currentMark);

  this.gameOver(currentMark);

};

View.prototype.gameOver = function (currentMark) {
  if(this.game.isOver()) {
    var $winText = $("<footer>");
    this.$el.find(".square").css("color","red").css("background-color", "white");

    if(this.game.winner()) {
      this.$el.find("." + currentMark).css("background-color", "green")
        .css("color", "white");
      $winText.text("You win, " + currentMark + "!");
    } else {
      $winText.text("It's a draw!");
    }
    this.$el.off("click");
    $(".square").css("cursor", "default");

    this.$el.append($winText);
  }

};

View.prototype.setupBoard = function () {
  for (var i = 0; i < 3; i++) {
    this.addRow();

  }
};

View.prototype.addRow = function () {
  // debugger;
  var rowIdx = this.$el.find(".row").length;
  var $row = $("<ul>").addClass("row").addClass("group");

  for (var colIdx = 0; colIdx < 3; colIdx++) {
    var $square = $("<li>").addClass("square").data("pos", [rowIdx, colIdx]);
    $row.append($square);
  }

  this.$el.append($row);
};

module.exports = View;

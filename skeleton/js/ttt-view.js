var View = function (game, $el) {
  this.$el = $el;
  this.game = game;

  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
};

View.prototype.makeMove = function ($square) {
};

View.prototype.setupBoard = function () {
  for (var i = 0; i < 3; i++) {
    this.addRow();
  }
};

View.prototype.addRow = function () {
  // debugger;
  var rowIdx = this.$el.find(".row").length;
  var $row = $("<ul>").addClass(".row").addClass("group");

  for (var colIdx = 0; colIdx < 3; colIdx++) {
    var $square = $("<li>").addClass("square").data("pos", [rowIdx, colIdx]);
    $row.append($square);
  }

  this.$el.append($row);
};

module.exports = View;

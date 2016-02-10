var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  var game = new Game();
  var $ttt = $(".ttt");
  new View(game, $ttt);
});

var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

var orderedCards = [];
console.log(orderedCards);

MatchGame.generateCardValues = function () {

  var orderedCards = [];

  for (var value = 1; value <= 8; value++) {
    console.log('This is' + value);
    orderedCards.push(value);
  }

};

console.log(orderedCards);

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
